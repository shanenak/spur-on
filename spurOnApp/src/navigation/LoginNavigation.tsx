import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeNavigation from './HomeNavigation';
import {CurrentUserContext, defaultUsername} from '../context/UserContext';

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
  const [currentUsername, setCurrentUsername] =
    useState<string>(defaultUsername);

  const currentUsernameCtx = useMemo(
    () => ({username: currentUsername, setUsername: setCurrentUsername}),
    [currentUsername],
  );

  useEffect(() => {
    axios
      .get('http://localhost:3001/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          setCurrentUsername(response.data.user.username);
        } else {
          setCurrentUsername(defaultUsername);
        }
      })
      .catch(error => console.log('api errors:', error));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUsernameCtx}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {currentUsername === defaultUsername ? (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </CurrentUserContext.Provider>
  );
};

export default LoginNavigation;
