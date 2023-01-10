import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ChatService} from '../../services';

const HomeScreen = () => {
  useEffect(() => {
    ChatService.fetchDialogs();
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
