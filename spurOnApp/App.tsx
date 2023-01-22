import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from "react-native-paper";

import { theme } from './src/styles/theme';
import Login from './src/components/Login';

function App(): JSX.Element {

  return (
    <Provider theme={theme}>
      <View style={styles.container}>
        <Login/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
