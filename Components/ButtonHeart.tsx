import { StyleSheet, View, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Heart } from 'phosphor-react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const ButtonHeart = () => {
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

  return (
    <Pressable style={styles.btnHeart} onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
      <View style={styles.containerHeart}>
        <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
          <Heart size={20} weight="fill" color={"#E5EAFA"} />
        </Animated.View>
      </View>

      <Animated.View style={fillStyle}>
        <Heart size={20} weight="fill" color={"#FC8066"} />
      </Animated.View>
    </Pressable>
  )
}

export default ButtonHeart

const styles = StyleSheet.create({
  btnHeart: {
    width: 44,
    height: 44,
    backgroundColor: '#2C2F4A',
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