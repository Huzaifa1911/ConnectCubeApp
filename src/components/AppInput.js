import {View, TextInput, Text, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';

import {theme} from '../assets';

const AppInput = ({title, onChangeText, placeholder, secureText, value, returnKeyType = 'done', error}) => {
  const inputStyle = useMemo(() => StyleSheet.flatten([styles.input, {borderColor: error ? theme.colors.error : theme.colors.heading}]), [error]);

  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <TextInput onChangeText={onChangeText} style={inputStyle} placeholder={placeholder} secureTextEntry={secureText} value={value} returnKeyType={returnKeyType} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  titleWrapper: {
    marginVertical: 8,
  },
  titleStyle: {
    color: theme.colors.heading,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderRadius: 8,
  },
});
