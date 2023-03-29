import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import NotRatings from '../assets/NotRatings.png'

const NotRating = () => {
  return (
    <View style={styles.containerImageNotRating}>
      <Image source={NotRatings} style={styles.ImageNotRating} />
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