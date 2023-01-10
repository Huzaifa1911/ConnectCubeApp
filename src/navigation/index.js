import React from 'react';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';

import CommonStack from './CommonStack';
import AuthStack from './AuthStack';

export const NavigationService = createNavigationContainerRef();

const Navigation = () => {
  const isLoggedIn = false;
  return <NavigationContainer ref={NavigationService}>{isLoggedIn ? <AuthStack /> : <CommonStack />}</NavigationContainer>;
};

export default Navigation;
