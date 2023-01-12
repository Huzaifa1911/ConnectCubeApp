import {propOr} from 'ramda';

import {getAllMessages} from '../../../ChatService/Chat';
import {useAppQuery} from '../GenericHooks';

const select = data => propOr([], 'items', data);

const useGetChatMessages = ({dialogId, showLoading = false}) => {
  return useAppQuery({queryKey: ['MESSAGES', dialogId], queryFn: () => getAllMessages(dialogId), select, showLoading});
};

export default useGetChatMessages;
