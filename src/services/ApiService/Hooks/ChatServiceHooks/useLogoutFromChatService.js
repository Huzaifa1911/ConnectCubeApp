import {useCallback} from 'react';

import {useAppMutation} from '../GenericHooks';
import {ACTION_TYPES, useAppContext} from '../../../../context';
import {logoutFromChatService} from '../../../ChatService/Auth';

const useLogoutFromChatService = ({showLoading = false}) => {
  const {dispatch} = useAppContext();

  const onSuccess = useCallback(data => {
    dispatch({type: ACTION_TYPES.SET_SESSION, payload: null});
  }, []);

  return useAppMutation({queryFn: () => logoutFromChatService(), showLoading, onSuccess});
};

export default useLogoutFromChatService;
