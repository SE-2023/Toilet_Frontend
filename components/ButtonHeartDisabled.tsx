import { StyleSheet, View, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Heart } from 'phosphor-react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { deleteMyList, addMyList } from '../services/myList';



const ButtonHeartDisabled = () => {
  const liked = useSharedValue(0);
  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
        transform: [{ scale: liked.value }],
        opacity: liked.value,
      };
  });

 



  const HeartBotton = (): JSX.Element | null =>{
      return(
      <Pressable style={styles.btnHeart}>
      
          <Heart size={20} weight="fill" color={"#E5EAFA"} />

      </Pressable>
      )
  }

  return (
    <HeartBotton></HeartBotton>
  )
}

export default ButtonHeartDisabled

const styles = StyleSheet.create({
  btnHeart: {
    width: 44,
    height: 44,
    backgroundColor: '#ABADBB',
    borderRadius: 8,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeart: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
})