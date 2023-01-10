import ConnectyCube from 'react-native-connectycube';
import {showAlert} from '../../utils';

export const connect = async (userId, password) => {
  await ConnectyCube.chat.connect({userId, password});
};

export const fetchDialogs = async () => {
  try {
    const dialogs = await ConnectyCube.chat.dialog.list();
    console.log(dialogs);
  } catch (error) {
    showAlert(error.info);
  }
};
