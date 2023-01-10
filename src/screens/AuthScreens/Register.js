import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AppButton, AppInput} from '../../components';
import {showAlert, useForm} from '../../utils';
import {theme} from '../../assets';
import {NavigationService} from '../../navigation';
import {ChatService} from '../../services';
import {ACTION_TYPES, useAppContext} from '../../context';

const Register = () => {
  const {getValues, setValue, errors, isValid} = useForm({defaultValues: {name: '', password: '', confirmPassword: ''}});
  const {dispatch} = useAppContext();

  const onSubmit = async () => {
    const {name, password, confirmPassword} = getValues();

    if (confirmPassword === password) {
      dispatch({type: ACTION_TYPES.START_LOADING});
      const params = {full_name: name, login: name, password};
      const session = await ChatService.signUp(params);
      if (session) {
        dispatch({type: ACTION_TYPES.SET_SESSION, payload: session});
      }
      dispatch({type: ACTION_TYPES.STOP_LOADING});
    } else {
      showAlert('Password not matched');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.label}>Register Yourself</Text>
      </View>
      <View style={styles.form}>
        <AppInput title="Full Name" onChangeText={text => setValue('name', text)} placeholder="Enter fullname" returnKeyType="next" value={getValues('name')} error={errors.name} />
        <AppInput title="Password" onChangeText={text => setValue('password', text)} placeholder="Enter Password" secureText value={getValues('password')} error={errors.password} />
        <AppInput
          title="Confirm Password"
          onChangeText={text => setValue('confirmPassword', text)}
          placeholder="Re-Type Password"
          secureText
          value={getValues('confirmPassword')}
          error={errors.confirmPassword}
        />
        <AppButton title="Already have an account?" titleColor={theme.colors.heading} buttonColor={theme.colors.white} style={styles.textButton} onPress={() => NavigationService.goBack()} />

        <View style={styles.buttonWrapper}>
          <AppButton title="Register" onPress={onSubmit} disabled={!isValid} />
        </View>
      </View>
    </View>
  );
};

export default Register;
