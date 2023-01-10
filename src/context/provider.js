import React, {createContext, useReducer} from 'react';

import {initialState, reducer} from './reducer';

export const AppContext = createContext(initialState);

const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {state, dispatch};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
