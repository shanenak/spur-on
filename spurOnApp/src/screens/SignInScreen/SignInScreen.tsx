import React, {FC, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Logo from '../../../assets/images/Logo_1.png';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen: FC = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const onSignInPressed = (data: any) => {
    console.log(data);
    // Validate
    // navigation.navigate('Home');
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
            message: 'Password must be minimum 3 character long',
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
            message: 'Password must be minimum 5 character long',
          },
        }}
      />

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
