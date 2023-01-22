import React from 'react';
import {
  Text,
  View
} from 'react-native';

import LoginScreen from "react-native-login-screen";


function Login(): JSX.Element {
  return <LoginScreen
    logoImageSource={require("../assets/images/tiny_whale.png")}
    onLoginPress={() => {}}
    onSignupPress={() => {}}
    onEmailChange={(email: string) => {}}
    onPasswordChange={(password: string) => {}}
  />
};
export default Login;
