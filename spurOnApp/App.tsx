import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
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
