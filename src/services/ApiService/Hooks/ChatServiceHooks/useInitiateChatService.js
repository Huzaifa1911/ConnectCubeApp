import {useCallback} from 'react';

import {useAppQuery} from '../GenericHooks';
import {initiateChatService} from '../../../ChatService/Auth';
import {ACTION_TYPES, useAppContext} from '../../../../context';

const useInitiateChatService = () => {
  const {dispatch} = useAppContext();

  const onSuccess = useCallback(data => {
    dispatch({type: ACTION_TYPES.SET_SESSION, payload: data});
  }, []);

  return useAppQuery({queryKey: ['SESSION'], queryFn: () => initiateChatService(), onSuccess});
};

export default useInitiateChatService;
