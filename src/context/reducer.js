import {ACTION_TYPES} from './types';

export const initialState = {
  isLoading: false,
  session: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.SET_SESSION:
      return {
        ...state,
        session: action.payload,
      };
    default:
      return state;
  }
};
