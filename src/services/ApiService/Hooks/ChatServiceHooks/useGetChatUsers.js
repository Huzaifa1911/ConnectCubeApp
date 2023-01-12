import {useAppContext} from '../../../../context';
import {getChatUsers} from '../../../ChatService/Chat';
import {useAppQuery} from '../GenericHooks';

const useGetChatUsers = ({showLoading = false, searchText}) => {
  const {
    state: {
      session: {id},
    },
  } = useAppContext();
  return useAppQuery({queryKey: ['USERS', searchText], queryFn: () => getChatUsers(searchText, id)});
};

export default useGetChatUsers;
