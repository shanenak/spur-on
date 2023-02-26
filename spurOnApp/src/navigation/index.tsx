import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';

import {TUser} from '../types/types';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<TUser>();

  const handleLogin = (data: any) => {
    setUser({username: data.user.username});
    setLoggedIn(true);
    console.log('got login with user:', data.user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response.data.user);
        } else {
          handleLogout();
        }
      })
      .catch(error => console.log('api errors:', error));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!loggedIn ? (
          <>
            <Stack.Screen name="SignIn">
              {props => <SignInScreen {...props} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
