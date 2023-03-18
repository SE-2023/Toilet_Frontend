import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {Star} from 'phosphor-react-native';

const StarReview = ({ filled, onClick }:any) => {
  return (
    <TouchableOpacity style={styles.star} onPress={onClick}>
      <Star size={38} weight="fill" color={filled ? "#FAC353" : "#ABADBB"} />
    </TouchableOpacity>
  )
}

export default StarReview

const styles = StyleSheet.create({
    star: {
        paddingHorizontal: 7,
    },
})