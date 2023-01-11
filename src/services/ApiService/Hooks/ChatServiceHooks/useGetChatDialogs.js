import {getChatDialogs} from '../../../ChatService/Chat';
import {useAppQuery} from '../GenericHooks';

const useGetChatDialogs = ({showLoading = false, currentUserId}) => {
  return useAppQuery({queryKey: ['DIALOGS'], queryFn: () => getChatDialogs(currentUserId), showLoading});
};

export default useGetChatDialogs;
