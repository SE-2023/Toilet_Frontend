import { StyleSheet, View, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Heart } from 'phosphor-react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
interface IHeart {
  onSelected: (value: boolean) => void;
}
const BtnHeartMyList = (props:IHeart) => {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable style={styles.btnHeart} onPress={() => {setLiked((isLiked) => !isLiked),props.onSelected(true)}}>
      <Heart
        size={16}
        weight="fill"
        color={liked ? "#E5EAFA" : "#FC8066"}
      />
    </Pressable>
  );
}

export default BtnHeartMyList

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
})