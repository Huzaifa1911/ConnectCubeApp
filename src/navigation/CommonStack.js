import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, LandingScreen, LoginScreen, RegisterScreen} from '../screens';
import {NavigateTo} from '../utils';

const Stack = createNativeStackNavigator();

const options = {
  headerBackTitle: '',
};

const CommonStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name={NavigateTo.LANDING_SCREEN} component={LandingScreen} options={{headerShown: false}} />
      <Stack.Screen name={NavigateTo.LOGIN_SCREEN} component={LoginScreen} options={{title: 'Login'}} />
      <Stack.Screen name={NavigateTo.REGISTER_SCREEN} component={RegisterScreen} options={{title: 'Register'}} />
      <Stack.Screen name={NavigateTo.HOME_SCREEN} component={HomeScreen} options={{title: 'Home'}} />
    </Stack.Navigator>
  );
};

export default CommonStack;
