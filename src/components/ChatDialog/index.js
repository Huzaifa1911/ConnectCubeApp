import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {propOr} from 'ramda';

import {theme} from '../../assets';
import {formatTime, USER_DEFAULT_IMAGE} from '../../utils';
import LastMessage from './components/LastMessage';
import UnreadMessagesCount from './components/UnreadMessagesCount';

const ChatDialog = ({dialog, onPress}) => {
  const avatar = propOr(USER_DEFAULT_IMAGE, 'avatar', dialog);
  const name = propOr('', 'name', dialog);
  const lastRequestAt = propOr('', 'last_message_date_sent', dialog);
  const unreadMessagesCount = propOr(0, 'unread_messages_count', dialog);
  const lastMessage = propOr('', 'last_message', dialog);
  const lastMessageStatus = propOr('', 'last_message_status', dialog);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      <View style={styles.content}>
        <Image source={{uri: avatar}} style={styles.avatar} resizeMode="contain" />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <LastMessage message={lastMessage} status={lastMessageStatus} />
        </View>
      </View>
      <View>
        <Text>{formatTime(lastRequestAt, 'hh:mm A')}</Text>
        <UnreadMessagesCount count={unreadMessagesCount} />
      </View>
    </TouchableOpacity>
  );
};

export default ChatDialog;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.heading,
  },
  lastMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.heading,
  },
  info: {
    marginLeft: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
});
