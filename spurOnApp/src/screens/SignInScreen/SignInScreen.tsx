import React, { FC, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen: FC = () => {
  const { height } = useWindowDimensions();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('')

  const onSignInPressed = () => {
    console.warn("Sign In");
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password")
  }
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}/>
      <CustomInput
        placeholder='Username'
        value={username}
        setValue={setUsername}
        />
      <CustomInput
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        />
      <CustomButton text={'Sign In'} onPress={onSignInPressed} type={'PRIMARY'}/>
      <CustomButton text={'Forgot Password'} onPress={onForgotPasswordPressed} type={'TERTIARY'}/>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
    resizeMode: "contain"
  }
})
