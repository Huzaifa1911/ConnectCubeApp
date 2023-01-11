import dayjs from 'dayjs';
import {anyPass, isEmpty, isNil} from 'ramda';
import {Alert} from 'react-native';

export const showAlert = data => {
  Alert.alert('Message', JSON.stringify(data));
};
export const isEmptyOrNil = anyPass([isEmpty, isNil]);
export const formateDate = (dateString, format = 'DD/MM/YYYY') => {
  return dayjs(dateString).format(format);
};
