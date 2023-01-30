import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginNavigation from './src/navigation/LoginNavigation';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LoginNavigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
