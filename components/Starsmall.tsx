import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Star} from 'phosphor-react-native';

const Starsmall = ({filled}: any) => {
  return (
    <Star size={16} weight="fill" color={filled ? '#FAC353' : '#ABADBB'} />
  );
};

export default Starsmall;

const styles = StyleSheet.create({
  star: {
    paddingHorizontal: 7,
  },
});
