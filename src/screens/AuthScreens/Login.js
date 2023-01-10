import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {AppButton, AppInput} from '../../components';
import {NavigationService} from '../../navigation';
import {NavigateTo, useForm} from '../../utils';
import {ChatService} from '../../services';
import {theme} from '../../assets';

const LoginScreen = () => {
  const {getValues, setValue, errors} = useForm({defaultValues: {name: '', password: ''}});

  const onSubmit = async () => {
    const {name, password} = getValues();
    if (name !== '' && password !== '') {
      const params = {full_name: name, login: name, password};
      await ChatService.signIn(params);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.label}>Sign Into ConnectyCube</Text>
      </View>
      <View style={styles.form}>
        <AppInput title="Fullname" onChangeText={text => setValue('name', text)} placeholder="Enter fullname" returnKeyType="next" value={getValues('name')} error={errors.name} />
        <AppInput title="Password" onChangeText={text => setValue('password', text)} placeholder="Enter Password" secureText value={getValues('password')} error={errors.password} />
        <AppButton
          title="Don't have an account?"
          titleColor={theme.colors.heading}
          buttonColor={theme.colors.white}
          style={styles.textButton}
          onPress={() => NavigationService.navigate(NavigateTo.REGISTER_SCREEN)}
        />

        <View style={styles.buttonWrapper}>
          <AppButton title="Login" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
