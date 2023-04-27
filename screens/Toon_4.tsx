import { StyleSheet, View, Image, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import img1 from '../assets/toon4/IMG_4257.jpg'
import img2 from '../assets/toon4/IMG_4258.jpg'
import img3 from '../assets/toon4/IMG_4259.jpg'
import img4 from '../assets/toon4/IMG_4260.jpg'
import img5 from '../assets/toon4/IMG_4261.jpg'
import img6 from '../assets/toon4/IMG_4262.jpg'
import img7 from '../assets/toon4/IMG_4263.jpg'
import img8 from '../assets/toon4/IMG_4264.jpg'
import img9 from '../assets/toon4/IMG_4265.jpg'
import img10 from '../assets/toon4/IMG_4266.jpg'
import img11 from '../assets/toon4/IMG_4267.jpg'
import img12 from '../assets/toon4/IMG_4268.jpg'
import img13 from '../assets/toon4/IMG_4269.jpg'
import img14 from '../assets/toon4/IMG_4270.jpg'
import img15 from '../assets/toon4/IMG_4271.jpg'
import img16 from '../assets/toon4/IMG_4272.jpg'
import img17 from '../assets/toon4/IMG_4273.jpg'
import img18 from '../assets/toon4/IMG_4274.jpg'
import { CaretLeft } from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../stacks/RootStack';

const {width} = Dimensions.get('window');
const aspectRatio = 500 / 220;
const height = width * aspectRatio;

const Toon_4 = () => {
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
    </SafeAreaView>
  )
}

export default Toon_4

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