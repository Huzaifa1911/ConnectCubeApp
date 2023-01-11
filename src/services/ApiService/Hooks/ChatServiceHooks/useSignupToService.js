import {useCallback} from 'react';

import {ACTION_TYPES, useAppContext} from '../../../../context';
import {signUpToChatService} from '../../../ChatService/Auth';
import {useAppMutation} from '../GenericHooks';

const useSignupToService = ({showLoading = false}) => {
  const {dispatch} = useAppContext();

  const onSuccess = useCallback(data => {
    dispatch({type: ACTION_TYPES.SET_SESSION, payload: data});
  }, []);

  return useAppMutation({
    queryFn: payload => signUpToChatService(payload),
    onSuccess,
    showLoading,
  });
};

export default useSignupToService;
