import React, { FC, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen: FC = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('')
  const [ passwordRepeat, setPasswordRepeat] = useState('');

  const onSignUpPressed = () => {
    console.warn("Signed Up");
  }

  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use");
  }

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy");
  }

  const onSignInPress = () => {
    console.warn("Sign In")
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        placeholder='Username'
        value={username}
        setValue={setUsername}
        />
      <CustomInput
        placeholder='Email'
        value={email}
        setValue={setEmail}
        />
      <CustomInput
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        />
      <CustomInput
        placeholder='Repeat Password'
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
        />
      <CustomButton text={'Sign Up'} onPress={onSignUpPressed} type={'PRIMARY'}/>

      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privary Policy.</Text>
      </Text>

      <CustomButton
        text="Have an account? Sign in"
        onPress={onSignInPress}
        type='TERTIARY'/>
    </View>
  )
}

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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  },
  link: {
    color: '#FDB075'
  },
  text: {
    color: 'gray',
    marginVertical: 10
  }
})

export default SignUpScreen
