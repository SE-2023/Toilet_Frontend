import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HamsterSad2 from '../assets/HamsterSad2.png'

const NotRating = () => {
  return (
    <View style={styles.containerImageNotRating}>
      <Image source={HamsterSad2} style={styles.ImageNotRating} />
    </View>
  )
}

export default NotRating

const styles = StyleSheet.create({
  containerImageNotRating: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  ImageNotRating: {
    width: 270,
    height: 80,
    opacity: 0.7,
  },
})