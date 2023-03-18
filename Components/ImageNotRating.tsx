import { StyleSheet, Image } from 'react-native'
import React from 'react'
import HamsterSad from '../assets/Hamster2.png'

const ImageNotRating = () => {
  return (
    <Image source={HamsterSad} style={styles.HamsterSad} />
  )
}

export default ImageNotRating

const styles = StyleSheet.create({
  HamsterSad: {
    width: 200,
    height: 160,
    alignSelf: 'center',
    marginTop: 20,
  },
})