import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StyleSheet} from 'react-native';

import {ChatService} from './services';
import {AppContextProvider} from './context';
import AppWrapper from './AppWrapper';

const App = () => {
  useEffect(() => ChatService.init(), []);
  return (
    <AppContextProvider>
      <SafeAreaView style={styles.container}>
        <AppWrapper />
      </SafeAreaView>
    </AppContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
