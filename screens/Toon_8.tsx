import { StyleSheet, Text, View, Image, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import img1 from '../assets/toon8/IMG_4246.jpg'
import img2 from '../assets/toon8/IMG_4247.jpg'
import img3 from '../assets/toon8/IMG_4248.jpg'
import img4 from '../assets/toon8/IMG_4249.jpg'
import img5 from '../assets/toon8/IMG_4250.jpg'
import { CaretLeft } from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../stacks/RootStack';

const {width} = Dimensions.get('window');
const aspectRatio = 500 / 270;
const height = width * aspectRatio;

const Toon_8 = () => {
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
            <View>
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
    </SafeAreaView>
  )
}

export default Toon_8

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