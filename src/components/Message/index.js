import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {propOr} from 'ramda';

import {theme} from '../../assets';
import {formateDate} from '../../utils';
import MessageStatus from '../MessageStatus';

const Message = ({message, isSelfSent}) => {
  const messageId = propOr('', '_id', message);
  const messageBody = propOr('', 'message', message);
  const sentTime = propOr('', 'created_at', message);
  const isRead = propOr(0, 'read', message);
  const status = isRead === 1 ? 'read' : 'delivered';

  const [selectedMessageId, setSelectedMessageId] = useState(null);

  const styles = useStyles(isSelfSent, selectedMessageId === messageId);

  const onLongMessagePress = () => setSelectedMessageId(messageId);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onLongPress={onLongMessagePress}>
      <Text style={styles.messageBody}>{messageBody}</Text>
      <Text style={styles.timeSent}>{formateDate(sentTime, 'hh:mm')}</Text>
      {isSelfSent && <MessageStatus status={status} />}
    </TouchableOpacity>
  );
};

export default Message;

const useStyles = (isSelfSent = false, isMessageSelected = false) => {
  return StyleSheet.create({
    container: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: isSelfSent ? 10 : 0,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: isSelfSent ? 0 : 10,
      backgroundColor: isSelfSent ? theme.colors.primary : theme.colors.lightGreen,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 8,
      paddingRight: 5,
      marginVertical: 5,
      width: 200,
      alignSelf: isSelfSent ? 'flex-end' : 'flex-start',
      opacity: isMessageSelected ? 0.5 : 1,
    },
    messageBody: {
      color: theme.colors.white,
      fontSize: 13,
    },
    timeSent: {
      color: theme.colors.gray,
      alignSelf: 'flex-end',
      fontSize: 10,
    },
  });
};
