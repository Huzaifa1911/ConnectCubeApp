import {useCallback} from 'react';

import {useAppMutation} from '../GenericHooks';
import {ACTION_TYPES, useAppContext} from '../../../../context';
import {signIntoChatService} from '../../../ChatService/Auth';

const useSignInToService = ({showLoading = false}) => {
  const {dispatch} = useAppContext();

  const onSuccess = useCallback(data => {
    dispatch({type: ACTION_TYPES.SET_SESSION, payload: data});
  }, []);

  return useAppMutation({
    queryFn: payload => signIntoChatService(payload),
    showLoading,
    onSuccess,
  });
};

export default useSignInToService;
