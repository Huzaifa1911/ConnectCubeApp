import {CHAT_APPLICATION_ID, CHAT_AUTH_KEY, CHAT_AUTH_SECRET} from '../../utils';

export const config = {
  appId: CHAT_APPLICATION_ID,
  authKey: CHAT_AUTH_KEY,
  authSecret: CHAT_AUTH_SECRET,
  debug: {mode: 1},
};

export const DIALOG_TYPE = {
  PRIVATE: 3,
  GROUP: 2,
  BROADCAST: 1,
  PUBLIC_CHANNEL: 4,
};
