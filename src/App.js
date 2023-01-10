import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import Navigation from './navigation';
import {StyleSheet} from 'react-native';
import {ChatService} from './services';

const App = () => {
  useEffect(() => ChatService.init(), []);
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
