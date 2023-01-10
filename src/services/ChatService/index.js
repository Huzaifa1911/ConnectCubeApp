import ConnectyCube from 'react-native-connectycube';
import {config} from './config';
import {NavigationService} from '../../navigation';
import {NavigateTo, showAlert} from '../../utils';

const init = () => {
  ConnectyCube.init(config);
};

const signIn = async params => {
  try {
    const session = await ConnectyCube.createSession(params);
    console.log(session.user);
    NavigationService.navigate(NavigateTo.HOME_SCREEN);
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

export default {init, signIn, signUp};
