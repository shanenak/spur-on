import React, {FC, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen: FC = () => {
  const navigation = useNavigation();
  const [signUpError, setSignUpError] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const passwordValue = watch('password');

  console.log(errors);

  const onSignUpPressed = (user: any) => {
    axios
      .post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          navigation.navigate('SignIn');
        } else {
          console.log('api errors: ', response.data.errors);
        }
      })
      .catch(error => console.log('api errors:', error));
    console.warn('Signed Up');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Terms of Use');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
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
      {/* <CustomInput
        name="email"
        placeholder="Email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Must enter a valid email address',
          },
        }}
      /> */}
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
      <CustomInput
        name="password-repeat"
        placeholder="Repeat Password"
        control={control}
        secureTextEntry={true}
        rules={{
          validate: (value: string) =>
            value === passwordValue || 'Password does not match',
        }}
      />
      <CustomButton
        text={'Sign Up'}
        onPress={handleSubmit(onSignUpPressed)}
        type={'PRIMARY'}
      />
      {signUpError != '' && <Text style={{color: 'red'}}>{signUpError}</Text>}

      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          Terms of Use
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
          Privary Policy.
        </Text>
      </Text>

      <CustomButton
        text="Have an account? Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  link: {
    color: '#FDB075',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
});

export default SignUpScreen;
