import ConnectyCube from 'react-native-connectycube';

import {config} from './config';
import {showAlert} from '../../utils';
import StorageService from '../StorageService';
import {connect} from './Chat';

const USER_SESSION = '@USER_SESSION';

export const init = () => {
  ConnectyCube.init(config);
};

export const signIn = async params => {
  // since this function returns promise, we can use it in react query as well.
  try {
    const session = await ConnectyCube.createSession(params);
    const currentUser = session.user;
    const customSession = Object.assign({}, currentUser, {password: params.password});

    // await StorageService.setData(customSession, USER_SESSION);
    await connect(currentUser.id, params.password);
    return customSession;
  } catch (error) {
    showAlert(error.info);
  }
};

export const signUp = async params => {
  try {
    await ConnectyCube.createSession();
    await ConnectyCube.users.signup(params);
    return await signIn(params);
  } catch (error) {}
};

export const logout = async () => {
  await ConnectyCube.logout();
};
