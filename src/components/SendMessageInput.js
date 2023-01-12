import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

import AppInput from './AppInput';
import {theme} from '../assets';
import {SendIcon} from '../icons';

const SendMessageInput = ({onMessageSent}) => {
  const [message, setMessage] = useState('');

  const onSentButtonPress = () => {
    onMessageSent(message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <AppInput placeholder="Type Here" onChangeText={text => setMessage(text)} value={message} style={styles.inputStyle} width={'88%'} multiline />
      <TouchableOpacity onPress={onSentButtonPress} style={styles.sentButton} activeOpacity={0.6} disabled={message.length === 0}>
        <SendIcon size={17} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default SendMessageInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    borderTopWidth: 0.2,
    borderTopColor: theme.colors.gray,
  },
  inputStyle: {
    width: '100%',
    borderColor: theme.colors.gray,
    borderRadius: 20,
    borderWidth: 0.2,
    paddingTop: 13,
    backgroundColor: theme.colors.white,
  },
  sentButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    marginLeft: 8,
  },
});
