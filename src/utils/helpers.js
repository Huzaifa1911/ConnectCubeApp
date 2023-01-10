import {anyPass, isEmpty, isNil} from 'ramda';
import {Alert} from 'react-native';

export const showAlert = data => {
  Alert.alert('Message', JSON.stringify(data));
};
export const isEmptyOrNil = anyPass([isEmpty, isNil]);
