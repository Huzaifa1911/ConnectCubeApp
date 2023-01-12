import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {theme} from '../../../assets';
import MessageStatus from '../../MessageStatus';

const LastMessage = ({message, status}) => {
  return (
    <View>
      <Text style={styles.lastMessage}>{message}</Text>
      <View>{message.length > 0 && <MessageStatus status={status} showStatus alignSelf="flex-start" />}</View>
    </View>
  );
};

export default LastMessage;

const styles = StyleSheet.create({
  status: {
    fontSize: 12,
    fontStyle: 'italic',
    marginLeft: 5,
  },
  lastMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.heading,
  },
});
