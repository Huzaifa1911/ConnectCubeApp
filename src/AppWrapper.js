import React from 'react';

import {useAppContext} from './context';
import Navigation from './navigation';
import AppLoader from './components/AppLoader';

const AppWrapper = () => {
  const {
    state: {isLoading},
  } = useAppContext();
  return (
    <>
      <Navigation />
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default AppWrapper;
