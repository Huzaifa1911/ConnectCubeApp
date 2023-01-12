import {propOr} from 'ramda';
import {getChatDialogs} from '../../../ChatService/Chat';
import {useAppQuery} from '../GenericHooks';

const select = data => {
  const dialogs = propOr([], 'items', data);
  return dialogs;
};

const useGetChatDialogs = ({showLoading = false}) => {
  return useAppQuery({queryKey: ['DIALOGS'], queryFn: () => getChatDialogs(), showLoading, select});
};

export default useGetChatDialogs;
