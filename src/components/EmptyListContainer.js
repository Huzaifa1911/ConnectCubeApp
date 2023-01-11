import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

import {theme} from '../assets';

const EmptyListContainer = ({isLoading, text, verticalSpace}) => {
  return <View style={[styles.container, {marginVertical: verticalSpace}]}>{isLoading ? <ActivityIndicator size="large" color={theme.colors.gray} /> : <Text>{text}</Text>}</View>;
};

export default EmptyListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
