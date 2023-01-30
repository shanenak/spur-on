import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

import {useCurrentUser} from '../../context/UserContext';
import {defaultUsername} from '../../context/UserContext';
import CustomButton from '../../components/CustomButton';

const UserProfileScreen: FC = () => {
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
    <View style={styles.root}>
      <Text style={styles.title}>{username}</Text>
      <CustomButton
        text={'Logout'}
        onPress={onSignOutPressed}
        type={'PRIMARY'}
      />
      {logoutError != '' && <Text style={{color: 'red'}}>{logoutError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
