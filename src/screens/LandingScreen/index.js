import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {NavigationService} from '../../navigation';
import {NavigateTo} from '../../utils';
import {AppButton} from '../../components';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome to ConnectyCube</Text>

      <AppButton title="Start here" onPress={() => NavigationService.navigate(NavigateTo.LOGIN_SCREEN)} width={200} />
    </View>
  );
};

export default LandingScreen;
