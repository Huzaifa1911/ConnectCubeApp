import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

import {theme} from '../assets';

const AppLoader = ({isLoading}) => {
  return (
    isLoading && (
      <View style={styles.container}>
        <View style={styles.indicationWrapper}>
          <ActivityIndicator size="large" color={theme.colors.gray} />
        </View>
      </View>
    )
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backdrop,
    position: 'absolute',
    zIndex: 1,
  },
  indicationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
  },
});
