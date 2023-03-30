import {StyleSheet, View, Pressable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Heart} from 'phosphor-react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface Iheart {
  myListId: string;
  onSelected: (value: boolean) => void;
  onClick: (value: string) => void;
}

const BtnHeartMyList = (props: Iheart) => {
  const [liked, setLiked] = useState(false);
  const clickHeart = ()=>{
    props.onSelected(true)
    props.onClick(props.myListId)
  }
  return (
    <Pressable style={styles.btnHeart} onPress={() => clickHeart()}>
      <Heart size={16} weight="fill" color={liked ? '#E5EAFA' : '#FC8066'} />
    </Pressable>
  );
};

export default BtnHeartMyList;

const styles = StyleSheet.create({
  btnHeart: {
    width: 32,
    height: 32,
    backgroundColor: '#2C2F4A',
    borderRadius: 30,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
});