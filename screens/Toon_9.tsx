import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import img1 from '../assets/toon9/IMG_4252.jpg'
import img2 from '../assets/toon9/IMG_4253.jpg'
import img3 from '../assets/toon9/IMG_4254.jpg'
import img4 from '../assets/toon9/IMG_4255.jpg'
import img5 from '../assets/toon9/IMG_4256.jpg'


const {width} = Dimensions.get('window');
const aspectRatio = 500 / 270;
const height = width * aspectRatio;

const Toon_9 = () => {
  return (
    <ScrollView >
        <View style={styles.container} >
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img1} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img2} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img3} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img4} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img5} style={{width, height}} />
            </View>
          </View>
          
          
        </View>
    </ScrollView>
  )
}

export default Toon_9

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})