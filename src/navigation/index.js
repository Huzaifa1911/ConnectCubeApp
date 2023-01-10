import React from 'react';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';

import CommonStack from './CommonStack';
import AuthStack from './AuthStack';
import {useAppContext} from '../context';
import {isEmptyOrNil} from '../utils';

export const NavigationService = createNavigationContainerRef();

const Navigation = () => {
  const {
    state: {session},
  } = useAppContext();
  const isSessionCreated = !isEmptyOrNil(session);
  return <NavigationContainer ref={NavigationService}>{isSessionCreated ? <AuthStack /> : <CommonStack />}</NavigationContainer>;
};

export default Navigation;
