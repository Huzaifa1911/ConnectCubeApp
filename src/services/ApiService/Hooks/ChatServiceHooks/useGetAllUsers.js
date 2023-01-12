import {useAppContext} from '../../../../context';
import {getChatUsers} from '../../../ChatService/Chat';
import {useAppQuery} from '../GenericHooks';

const useGetAllUsers = ({showLoading = false, searchText}) => {
  const {
    state: {
      session: {id},
    },
  } = useAppContext();
  return useAppQuery({queryKey: ['USERS', searchText], queryFn: () => getChatUsers(searchText, id), showLoading});
};

export default useGetAllUsers;
