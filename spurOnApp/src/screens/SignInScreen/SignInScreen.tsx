import React, {FC, useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Logo from '../../../assets/images/Logo_1.png';
import {useCurrentUser} from '../../context/UserContext';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen: FC = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {username, setUsername} = useCurrentUser();
  const [loginError, setLoginError] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const onSignInPressed = (user: any) => {
    axios
      .post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          setUsername(response.data.user.username);
        } else {
          setLoginError(response.data.error);
          console.log('not logged in:', response.data.error);
        }
      })
      .catch(error => {
        console.log('api errors:', error);
        setLoginError(error);
      });
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
      <CustomInput
        name="username"
        placeholder="Username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be min 3 character long',
          },
          maxLength: {
            value: 24,
            message: 'Username must be max 24 character long',
          },
        }}
      />
      <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 5,
            message: 'Password must be min 5 character long',
          },
          maxLength: {
            value: 24,
            message: 'Password must be max 24 character long',
          },
        }}
      />
      {loginError != '' && <Text style={{color: 'red'}}>{loginError}</Text>}

      <CustomButton
        text={'Sign In'}
        onPress={handleSubmit(onSignInPressed)}
        type={'PRIMARY'}
      />
      <CustomButton
        text={'Forgot Password'}
        onPress={onForgotPasswordPressed}
        type={'TERTIARY'}
      />
      <CustomButton
        text={"Don't have an account? Create one"}
        onPress={onSignUpPressed}
        type={'TERTIARY'}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
    resizeMode: 'contain',
  },
});
