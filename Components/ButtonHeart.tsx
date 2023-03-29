import { StyleSheet, View, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Heart } from 'phosphor-react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { deleteMyList, addMyList } from '../services/myList';

interface Iheart {
  heartIcon:Boolean;
  myListID : string;
  userID : string;
  toiletID : string;
  onSelected: (value: boolean) => void;
}

const ButtonHeart = (props:Iheart) => {
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

 

  const actionMyList = async() =>{
    if(props.heartIcon===false){
      addMyList({
        userId : props.userID,
        toiletId : props.toiletID
      });
      props.onSelected(true);
    }
    if(props.heartIcon===true){
      deleteMyList(props.myListID);
      props.onSelected(false);
    }
    
  }

  const HeartBotton = (): JSX.Element | null =>{
    if(props.heartIcon === true){
      return(
      <Pressable style={styles.btnHeart} onPress={() => {actionMyList()}}>
        <View style={styles.containerHeart}>
          <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
            <Heart size={20} weight="fill" color={"#FC8066"} />
          </Animated.View>
        </View>
      
        <Animated.View style={fillStyle}>
          <Heart size={20} weight="fill" color={"#E5EAFA"} />
        </Animated.View>
      </Pressable>
      )
    }
    else{
      return(
      <Pressable style={styles.btnHeart} onPress={() => {actionMyList()}}>
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
  }

  return (
    <HeartBotton></HeartBotton>
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