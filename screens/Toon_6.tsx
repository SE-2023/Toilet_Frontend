import { StyleSheet, View, Image, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import img1 from '../assets/toon6/IMG_4290.jpg'
import img2 from '../assets/toon6/IMG_4291.jpg'
import img3 from '../assets/toon6/IMG_4292.jpg'
import img4 from '../assets/toon6/IMG_4293.jpg'
import img5 from '../assets/toon6/IMG_4294.jpg'
import img6 from '../assets/toon6/IMG_4295.jpg'
import img7 from '../assets/toon6/IMG_4296.jpg'
import img8 from '../assets/toon6/IMG_4297.jpg'
import img9 from '../assets/toon6/IMG_4298.jpg'
import img10 from '../assets/toon6/IMG_4299.jpg'
import img11 from '../assets/toon6/IMG_4300.jpg'
import img12 from '../assets/toon6/IMG_4301.jpg'
import img13 from '../assets/toon6/IMG_4302.jpg'
import { CaretLeft } from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../stacks/RootStack';

const {width} = Dimensions.get('window');
const aspectRatio = 500 / 220;
const height = width * aspectRatio;

const Toon_6 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.btnBack_44}
        onPress={() => navigation.goBack()}>
        <CaretLeft size={24} weight="bold" color="#F4F6FD" />
      </TouchableOpacity>
      
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Toon_6

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  btnBack_44: {
    position: 'absolute',
    backgroundColor: '#2C2F4A',
    width: 44,
    height: 44,
    borderRadius: 30,
    top: 37,
    left: 16,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
})