import React from 'react';
import {Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const VectorIcon = ({name, color, size, type, style}) => {
  switch (type) {
    case 'FontAwesome':
      return <FontAwesome name={name} color={color} size={size} style={style} />;
    case 'Ionicons':
      return <Ionicons name={name} color={color} size={size} style={style} />;
    case 'AntDesign':
      return <AntDesign name={name} color={color} size={size} style={style} />;
    case 'EvilIcons':
      return <EvilIcons name={name} color={color} size={size} style={style} />;
    case 'Entypo':
      return <Entypo name={name} color={color} size={size} style={style} />;
    case 'Feather':
      return <Feather name={name} color={color} size={size} style={style} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} color={color} size={size} style={style} />;
    default:
      return <></>;
  }
};

export const ChatIcon = ({color, size, style}) => <VectorIcon name="message1" color={color} size={size} type="AntDesign" style={style} />;
export const SendIcon = ({color, size, style}) => <VectorIcon name="send-outline" color={color} size={size} type="Ionicons" style={style} />;
export const SingleTickIcon = ({color, size, style}) => <VectorIcon name="check" color={color} size={size} type="Feather" style={style} />;
export const DoubleTicksIcon = ({color, size, style}) => <VectorIcon name="checkmark-done" color={color} size={size} type="Ionicons" style={style} />;
