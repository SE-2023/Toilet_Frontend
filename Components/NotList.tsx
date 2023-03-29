import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import NotMyList from '../assets/NotMyList.png'

const NotList = () => {
  return (
    <View style={styles.containerImageNotMyList}>
      <Image source={NotMyList} style={styles.ImageNotMyList} />
    </View>
  )
}

export default NotList

const styles = StyleSheet.create({
  containerImageNotMyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageNotMyList: {
    width: 270,
    height: 80,
    opacity: 0.7,
  },
})