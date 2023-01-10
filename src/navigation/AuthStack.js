import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigateTo} from '../utils';
import {HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigateTo.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
