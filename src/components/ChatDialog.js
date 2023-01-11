import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {propOr} from 'ramda';

import {theme} from '../assets';
import {formateDate} from '../utils';

const DEFAULT_IMAGE = 'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png';

const ChatDialog = ({dialog, onPress}) => {
  const avatar = propOr(DEFAULT_IMAGE, 'avatar', dialog);
  const name = propOr('', 'full_name', dialog);
  const lastRequestAt = propOr('', 'last_request_at', dialog);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      <View style={styles.content}>
        <Image source={{uri: avatar}} style={styles.avatar} resizeMode="contain" />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text>{formateDate(lastRequestAt, 'hh:mm A')}</Text>
    </TouchableOpacity>
  );
};

export default ChatDialog;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.heading,
    marginLeft: 10,
    marginTop: 5,
  },
  avatar: {
    width: 50,
    height: 50,
  },
});
