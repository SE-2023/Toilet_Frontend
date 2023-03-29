import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import NotMyToilet from '../assets/NotMyToilet.png'

const NotToilet = () => {
  return (
    <View style={styles.containerImageNotMyToilet}>
      <Image source={NotMyToilet} style={styles.ImageNotMyToilet} />
    </View>
  )
}

export default NotToilet

const styles = StyleSheet.create({
    containerImageNotMyToilet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageNotMyToilet: {
    width: 270,
    height: 80,
    opacity: 0.7,
  },
})