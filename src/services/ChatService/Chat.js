import ConnectyCube from 'react-native-connectycube';

import {DIALOG_TYPE} from './config';

export const connect = async (userId, password) => {
  await ConnectyCube.chat.connect({userId, password});
};

export const getChatDialogs = async userId => {
  try {
    let users = [];
    const privateChatIds = [];
    const dialogs = await ConnectyCube.chat.dialog.list();

    if (dialogs) {
      dialogs.items.map(dialog => {
        if (dialog.type === DIALOG_TYPE.PRIVATE) {
          dialog.occupants_ids.forEach(occupant_id => {
            occupant_id !== userId && privateChatIds.push(occupant_id);
          });
        }
      });

      if (privateChatIds.length !== 0) {
        const usersList = await ConnectyCube.users.get({
          per_page: 100,
          filter: {
            field: 'id',
            param: 'in',
            value: privateChatIds,
          },
        });
        users = usersList.items.map(user => user.user);
      }
    }

    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};
