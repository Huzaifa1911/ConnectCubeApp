import {useContext} from 'react';
import {AppContext} from './provider';

const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (appContext === undefined) {
    throw new Error('useAppContext must be used within a App Context Provider');
  }
  return appContext;
};

export default useAppContext;
