import {init, signIn, signUp, logout} from './Auth';
import {fetchDialogs, connect} from './Chat';

export const ChatService = Object.freeze({init, signIn, signUp, logout, fetchDialogs, connect});
