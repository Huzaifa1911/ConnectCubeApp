import {FlatList, View} from 'react-native';
import React, {useLayoutEffect, useRef} from 'react';
import {pathOr, propOr} from 'ramda';

import {styles} from './styles';
import {Message, SendMessageInput} from '../../components';
import {useAppContext} from '../../context';
import {useGetChatMessages, useSendMessage} from '../../services';
import {getRecipentId} from '../../utils';

const ChatScreen = ({navigation, route}) => {
  const {
    state: {
      session: {id},
    },
  } = useAppContext();
  const listRef = useRef();
  const dialog = pathOr('User', ['params', 'dialog'], route);

  const occupantName = propOr('User', 'name', dialog);
  const dialogId = propOr(null, '_id', dialog);

  useLayoutEffect(() => navigation.setOptions({title: occupantName}), []);

  const {data: messages = []} = useGetChatMessages({dialogId, showLoading: false});
  const {mutate: sendMessageMutation} = useSendMessage({showLoadig: false});

  const renderItem = ({item}) => {
    const sender_id = propOr(0, 'sender_id', item);
    const isSelfSent = sender_id === id;
    return <Message message={item} isSelfSent={isSelfSent} />;
  };

  const onMessageSent = text => {
    const recipientId = getRecipentId(dialog, id);
    const payload = {
      dialog_id: dialogId,
      recipient_id: recipientId,
      message: text,
    };
    sendMessageMutation(payload);
  };

  return (
    <View style={styles.container}>
      <FlatList style={styles.list} contentContainerStyle={styles.contentContainer} data={messages} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} inverted />
      <SendMessageInput onMessageSent={onMessageSent} />
    </View>
  );
};

export default ChatScreen;
