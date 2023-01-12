import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {propOr} from 'ramda';

import {theme} from '../assets';
import {USER_DEFAULT_IMAGE} from '../utils/constants';

const UserCard = ({user, onPress}) => {
  const name = propOr('', 'full_name', user);
  const avatar = propOr(USER_DEFAULT_IMAGE, 'avatar', user);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
      <Image source={{uri: avatar}} style={styles.avatar} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.heading,
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
  },
});
