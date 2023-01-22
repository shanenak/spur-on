import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const App: FC = () => {

  return (
    <SafeAreaView style={styles.root}>
      <SignUpScreen/>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  }
})
