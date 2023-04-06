import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import img1 from '../assets/toon3/IMG_4146.jpg'
import img2 from '../assets/toon3/IMG_4147.jpg'
import img3 from '../assets/toon3/IMG_4148.jpg'
import img4 from '../assets/toon3/IMG_4149.jpg'
import img5 from '../assets/toon3/IMG_4150.jpg'
import img6 from '../assets/toon3/IMG_4151.jpg'
import img7 from '../assets/toon3/IMG_4152.jpg'
import img8 from '../assets/toon3/IMG_4153.jpg'
import img9 from '../assets/toon3/IMG_4154.jpg'
import img10 from '../assets/toon3/IMG_4155.jpg'
import img11 from '../assets/toon3/IMG_4156.jpg'
import img12 from '../assets/toon3/IMG_4157.jpg'
import img13 from '../assets/toon3/IMG_4158.jpg'
import img14 from '../assets/toon3/IMG_4159.jpg'
import img15 from '../assets/toon3/IMG_4160.jpg'
import img16 from '../assets/toon3/IMG_4161.jpg'
import img17 from '../assets/toon3/IMG_4162.jpg'
import img18 from '../assets/toon3/IMG_4163.jpg'


const {width} = Dimensions.get('window');
const aspectRatio = 500 / 220;
const height = width * aspectRatio;

const Toon_3 = () => {
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
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img6} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img7} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img8} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img9} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img10} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img11} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img12} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img13} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img14} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img15} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img16} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img17} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img18} style={{width, height}} />
            </View>
          </View>
          
        </View>
    </ScrollView>
  )
}

export default Toon_3

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})