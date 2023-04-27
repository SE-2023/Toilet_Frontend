import { StyleSheet, View, Image, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import img1 from '../assets/toon1/IMG_4095.jpg'
import img2 from '../assets/toon1/IMG_4096.jpg'
import img3 from '../assets/toon1/IMG_4097.jpg'
import img4 from '../assets/toon1/IMG_4098.jpg'
import img5 from '../assets/toon1/IMG_4099.jpg'
import img6 from '../assets/toon1/IMG_4100.jpg'
import img7 from '../assets/toon1/IMG_4101.jpg'
import img8 from '../assets/toon1/IMG_4102.jpg'
import img9 from '../assets/toon1/IMG_4103.jpg'
import img10 from '../assets/toon1/IMG_4104.jpg'
import img11 from '../assets/toon1/IMG_4105.jpg'
import img12 from '../assets/toon1/IMG_4106.jpg'
import img13 from '../assets/toon1/IMG_4107.jpg'
import img14 from '../assets/toon1/IMG_4108.jpg'
import img15 from '../assets/toon1/IMG_4109.jpg'
import img16 from '../assets/toon1/IMG_4110.jpg'
import img17 from '../assets/toon1/IMG_4111.jpg'
import img18 from '../assets/toon1/IMG_4112.jpg'
import img19 from '../assets/toon1/IMG_4113.jpg'
// import img20 from '../assets/toon1/IMG_4114.jpg'
import img21 from '../assets/toon1/IMG_4115.jpg'
import img22 from '../assets/toon1/IMG_4116.jpg'
import img23 from '../assets/toon1/IMG_4117.jpg'
import img24 from '../assets/toon1/IMG_4118.jpg'
import img25 from '../assets/toon1/IMG_4119.jpg'
import img26 from '../assets/toon1/IMG_4120.jpg'
import img27 from '../assets/toon1/IMG_4121.jpg'
import img28 from '../assets/toon1/IMG_4122.jpg'
import { CaretLeft } from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../stacks/RootStack';

const {width} = Dimensions.get('window');
const aspectRatio = 500 / 280;
const height = width * aspectRatio;

const Toon_1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.btnBack_44}
        onPress={() => navigation.goBack()}>
        <CaretLeft size={24} weight="bold" color="#F4F6FD" />
      </TouchableOpacity>

      <ScrollView >
        <View style={styles.container}>
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
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img19} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img21} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img22} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img23} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img24} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img25} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img26} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img27} style={{width, height}} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: height * 1}}>
              <Image source={img28} style={{width, height}} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Toon_1

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