import ConnectyCube from 'react-native-connectycube';
import {propOr} from 'ramda';

import {DIALOG_TYPE} from '../../utils';
import {queryClient} from '../ApiService/config';
import {AppState} from 'react-native';

export const connect = async (userId, password) => {
  await ConnectyCube.chat.connect({userId, password});
  ConnectyCube.chat.onMessageListener = onMessageListener;
  ConnectyCube.chat.onSentMessageCallback = onSentMessageListener;
  ConnectyCube.chat.onDeliveredStatusListener = onDeliveredStatusListener;
  ConnectyCube.chat.onReadStatusListener = onReadStatusListener;
  AppState.addEventListener('change', handleAppStateChange);
};

export const getChatDialogs = async () => {
  try {
    const dialogsData = await ConnectyCube.chat.dialog.list();
    const privateDialogs = propOr([], 'items', dialogsData).filter(dialog => {
      if (dialog.type === DIALOG_TYPE.PRIVATE) {
        return dialog;
      }
    });
    return {items: privateDialogs, ...dialogsData};
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getChatUsers = async (searchText, currentUserId) => {
  try {
    const users = [];
    const data = await ConnectyCube.users.get({full_name: searchText});
    const usersList = propOr([], 'items', data);
    usersList.forEach(item => {
      const user = item.user;
      if (user.id !== currentUserId) {
        users.push(user);
      }
    });
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllMessages = async dialogId => {
  try {
    const messages = await ConnectyCube.chat.message.list({
      chat_dialog_id: dialogId,
      sort_desc: 'date_sent',
    });
    return messages;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendMessage = async (message = '', recipient_id, dialogId) => {
  try {
    const messagePayload = {
      body: message.trim(),
      type: 'chat', // for private chats
      extension: {
        save_to_history: 1,
      },
      markable: 1,
    };
    await ConnectyCube.chat.send(recipient_id, messagePayload);
  } catch (error) {
    return Promise.reject(error);
  }
};

const onMessageListener = (userId, message) => {
  queryClient.invalidateQueries(['MESSAGES']);
  queryClient.invalidateQueries(['DIALOGS']);
};

const onSentMessageListener = () => {};

const onDeliveredStatusListener = () => {};

const onReadStatusListener = () => {};

const handleAppStateChange = appState => {
  if (appState === 'Active') {
    ConnectyCube.chat.markActive();
  } else {
    ConnectyCube.chat.markInactive();
  }
};
