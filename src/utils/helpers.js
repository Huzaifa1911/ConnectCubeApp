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

export const formatTime = (timestamp, format = 'hh:MM A') => {
  return dayjs(timestamp * 1000).format(format);
};

export const getRecipentId = (dialog, currentUserId) => {
  const recipient_id = dialog.occupants_ids.find(elem => elem !== currentUserId);
  return recipient_id;
};
