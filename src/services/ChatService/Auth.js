import ConnectyCube from 'react-native-connectycube';

import {config} from './config';
import {connect} from './Chat';
import {setData, getData, removeData} from '../StorageService';

const CHAT_SESSION = '@CHAT_SESSION';

export const initiateChatService = async () => {
  try {
    ConnectyCube.init(config);

    return await tryAutoLogin();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signIntoChatService = async params => {
  // since this function returns promise, we can use it in react query as well.
  try {
    const session = await ConnectyCube.createSession(params);
    const currentUser = session.user;
    const customSession = Object.assign({}, currentUser, {password: params.password});
    await connect(currentUser.id, params.password);
    await setData(customSession, CHAT_SESSION);
    return customSession;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signUpToChatService = async params => {
  try {
    await ConnectyCube.createSession();
    await ConnectyCube.users.signup(params);
    return await signIntoChatService(params);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const tryAutoLogin = async () => {
  try {
    const session = await getData(CHAT_SESSION);
    if (session) {
      return signIntoChatService(session);
    } else {
      return Promise.reject({info: 'No Session found'});
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logoutFromChatService = async () => {
  try {
    await removeData(CHAT_SESSION);
    return await ConnectyCube.logout();
  } catch (error) {
    return Promise.reject(error);
  }
};
