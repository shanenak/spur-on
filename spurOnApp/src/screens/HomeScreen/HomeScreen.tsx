import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

import {useCurrentUser} from '../../context/UserContext';
import CustomButton from '../../components/CustomButton';
import {defaultUsername} from '../../context/UserContext';

const HomeScreen: FC = () => {
  const {username, setUsername} = useCurrentUser();
  const [logoutError, setLogoutError] = useState('');

  const onSignOutPressed = () => {
    axios
      .post('http://localhost:3001/logout', {withCredentials: true})
      .then(response => {
        setUsername(defaultUsername);
      })
      .catch(error => {
        console.log('api errors:', error);
        setLogoutError(error.response);
      });
  };

  return (
    <View>
      <Text>Home! User: {username}</Text>
      <CustomButton
        text={'Logout'}
        onPress={onSignOutPressed}
        type={'TERTIARY'}
      />
      {logoutError != '' && <Text style={{color: 'red'}}>{logoutError}</Text>}
    </View>
  );
};

export default HomeScreen;
