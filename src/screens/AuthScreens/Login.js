import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {AppButton, AppInput} from '../../components';
import {NavigationService} from '../../navigation';
import {NavigateTo, useForm} from '../../utils';
import {ChatService} from '../../services';
import {theme} from '../../assets';
import {ACTION_TYPES, useAppContext} from '../../context';

const LoginScreen = () => {
  const {getValues, setValue, errors, isValid} = useForm({defaultValues: {name: '', password: ''}});
  const {dispatch} = useAppContext();

  const onSubmit = async () => {
    const {name, password} = getValues();

    if (name !== '' && password !== '') {
      dispatch({type: ACTION_TYPES.START_LOADING});
      const params = {full_name: name, login: name, password}; // related to chat
      const session = await ChatService.signIn(params); // related to chat
      if (session) {
        dispatch({type: ACTION_TYPES.SET_SESSION, payload: session});
      }
      dispatch({type: ACTION_TYPES.STOP_LOADING});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.label}>Sign Into ConnectyCube</Text>
      </View>
      <View style={styles.form}>
        <AppInput title="Full Name" onChangeText={text => setValue('name', text)} placeholder="Enter fullname" returnKeyType="next" value={getValues('name')} error={errors.name} />
        <AppInput title="Password" onChangeText={text => setValue('password', text)} placeholder="Enter Password" secureText value={getValues('password')} error={errors.password} />
        <AppButton
          title="Don't have an account?"
          titleColor={theme.colors.heading}
          buttonColor={theme.colors.white}
          style={styles.textButton}
          onPress={() => NavigationService.navigate(NavigateTo.REGISTER_SCREEN)}
        />

        <View style={styles.buttonWrapper}>
          <AppButton title="Login" onPress={onSubmit} disabled={!isValid} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
