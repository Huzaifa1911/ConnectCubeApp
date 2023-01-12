import {useAppMutation} from '../GenericHooks';
import {sendMessage} from '../../../ChatService/Chat';
import {queryClient} from '../../config';

const onSuccess = () => {
  queryClient.invalidateQueries(['MESSAGES']);
  queryClient.invalidateQueries(['DIALOGS']);
};

const useSendMessage = ({showLoadig = false}) => {
  return useAppMutation({queryFn: ({dialog_id, message, recipient_id}) => sendMessage(message, recipient_id, dialog_id), onSuccess, showLoadig});
};

export default useSendMessage;
