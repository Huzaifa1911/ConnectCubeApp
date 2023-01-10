import {Alert} from 'react-native';

export const showAlert = data => {
  Alert.alert('message', JSON.stringify(data));
};
