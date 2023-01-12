import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {theme} from '../../../assets';

const UnreadMessagesCount = ({count = 0}) => {
  return (
    count > 0 && (
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
      </View>
    )
  );
};

export default UnreadMessagesCount;

const styles = StyleSheet.create({
  container: {marginTop: 10, alignSelf: 'flex-end', width: 20, height: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.colors.primary},
  count: {
    color: theme.colors.white,
    fontSize: 12,
  },
});
