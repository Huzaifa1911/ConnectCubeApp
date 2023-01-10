import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';

import {theme} from '../assets';

const AppButton = ({title, onPress, style, buttonColor = theme.colors.primary, titleColor = theme.colors.white, width = '100%', disabled}) => {
  const buttonStyle = useMemo(() => StyleSheet.flatten([styles.container, {backgroundColor: buttonColor, width}, style]), [style, buttonColor, width]);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.6} style={buttonStyle}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});
