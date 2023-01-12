import {CHAT_APPLICATION_ID, CHAT_AUTH_KEY, CHAT_AUTH_SECRET} from '../../utils';

export const config = {
  appId: CHAT_APPLICATION_ID,
  authKey: CHAT_AUTH_KEY,
  authSecret: CHAT_AUTH_SECRET,
  debug: {mode: 1},
  chat: {
    streamManagement: {
      enable: true,
    },
  },
};
