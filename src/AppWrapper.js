import React from 'react';

import {useAppContext} from './context';
import Navigation from './navigation';
import {AppLoader} from './components';
import {useInitiateChatService} from './services';

const AppWrapper = () => {
  const {
    state: {isLoading},
  } = useAppContext();
  useInitiateChatService({showLoading: true});

  return (
    <>
      <Navigation />
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default AppWrapper;
