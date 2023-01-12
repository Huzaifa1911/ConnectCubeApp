import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {theme} from '../assets';
import {DoubleTicksIcon, SingleTickIcon} from '../icons';

const getIcon = status => {
  switch (status) {
    case 'read':
      return <DoubleTicksIcon size={12} color={theme.colors.blue} />;
    case 'delivered':
      return <SingleTickIcon size={12} color={theme.colors.gray} />;
    default:
      return <SingleTickIcon size={12} color={theme.colors.gray} />;
  }
};

const MessageStatus = ({status, showStatus = false, alignSelf = 'flex-end'}) => {
  return (
    <View style={[styles.container, {alignSelf}]}>
      {showStatus && <Text style={styles.status}>{status}</Text>}
      {getIcon(status)}
    </View>
  );
};

export default MessageStatus;

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  status: {
    fontSize: 9,
    color: theme.colors.gray,
    marginRight: 5,
    textTransform: 'capitalize',
  },
});
