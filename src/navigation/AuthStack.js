import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigateTo} from '../utils';
import {AddContactScreen, ChatScreen, HomeScreen} from '../screens';
import {useAppContext} from '../context';
import {Text, TouchableOpacity} from 'react-native';
import {useLogoutFromChatService} from '../services';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {
    state: {
      session: {full_name},
    },
  } = useAppContext();
  const {mutate: logoutMutation} = useLogoutFromChatService({showLoading: true});

  const HomeScreenOptions = {
    title: full_name,
    headerRight: () => (
      <TouchableOpacity activeOpacity={0.4} onPress={() => logoutMutation()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    ),
  };

  return (
    <Stack.Navigator screenOptions={{headerBackTitle: ''}}>
      <Stack.Screen name={NavigateTo.HOME_SCREEN} component={HomeScreen} options={HomeScreenOptions} />
      <Stack.Screen name={NavigateTo.ADD_CONTACT_SCREEN} component={AddContactScreen} options={{title: 'Add Contacts'}} />
      <Stack.Screen name={NavigateTo.CHAT_SCREEN} component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
