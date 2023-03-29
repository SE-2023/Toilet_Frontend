import {StyleSheet, View, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Heart} from 'phosphor-react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {deleteMyList} from '../services/myList';
interface Iheart {
  myListId: string;
  onSelected: (value: boolean) => void;
  onCheck: (value: number) => void;
}
const BtnHeartMyList = (props: Iheart) => {
  // const liked = useSharedValue(0);
  // console.log(props.myListId);
  // const outlineStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
  //       },
  //     ],
  //   };
  // });

  // const fillStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{scale: liked.value}],
  //     opacity: liked.value,
  //   };
  // });
  const [liked, setLiked] = useState(false);

  // return (
  //   <Pressable
  //     style={styles.btnHeart}
  //     // deleteMyList(props.myListId)
  //     onPress={() => {
  //       props.onSelected(true);
  //     }}>
  //     <View>
  //       <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
  //         <Heart size={16} weight="fill" color={'#FC8066'} />
  //       </Animated.View>
  //     </View>

  //     {/* <Animated.View style={fillStyle}>
  //       <Heart size={16} weight="fill" color={'#FC8066'} />
  //     </Animated.View> */}
  //   </Pressable>
  // );
  return (
    <Pressable
      style={styles.btnHeart}
      onPress={() => {
        setLiked(isLiked => !isLiked), props.onSelected(true), props.onCheck(1);
      }}>
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
