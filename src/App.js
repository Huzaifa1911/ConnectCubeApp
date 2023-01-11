import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {QueryClientProvider} from 'react-query';
import {LogBox, StyleSheet} from 'react-native';

import {queryClient} from './services';
import {AppContextProvider} from './context';
import AppWrapper from './AppWrapper';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={styles.container}>
          <AppWrapper />
        </SafeAreaView>
      </QueryClientProvider>
    </AppContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
