import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {theme} from '../assets';

const FloatingActionButton = ({onPress, iconImage, color = theme.colors.primary}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={[styles.container, {backgroundColor: color}]}>
      <Image source={iconImage} resizeMode="contain" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 50,
    height: 50,
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    right: 25,
    elevation: 10,
  },
  icon: {
    height: 25,
    width: 25,
  },
});
