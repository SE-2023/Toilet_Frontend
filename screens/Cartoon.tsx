import {Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import bgSUKA from '../assets/bgSUKA_7.png';
import img1_3 from '../assets/pog/IMG_4095.jpg'
import img2   from '../assets/pog/IMG_3998.jpg'
import img4   from '../assets/pog/IMG_4257.jpg'
import img5   from '../assets/pog/IMG_4275.jpg'
import img6   from '../assets/pog/IMG_4290.jpg'
import img7   from '../assets/pog/IMG_4240.jpg'
import img8   from '../assets/pog/IMG_4246.jpg'
import img9   from '../assets/pog/IMG_4252.jpg'
import {CartoonStackList} from '../stacks/CartoonStack'

// const Stack = createStackNavigator();

const {width} = Dimensions.get('window');
const aspectRatio = 500 / 500;
const height = width * aspectRatio;

const Cartoon = () => {

  const navigation = useNavigation<NativeStackNavigationProp<CartoonStackList>>();

  return (
    <ScrollView style={styles.bgColor} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={{height: height * 0.4}}>
            <Image source={bgSUKA} style={{width, height}} />
          </View>
        </View>

        <Text style={styles.title}>Cartoon</Text>

        <View style={{top: -50}}>
          <Text style={styles.Lazy}>Lazy Cooking</Text>
          <View
            style={{
              borderBottomColor: '#777790',
              borderBottomWidth: 1,
              marginTop: 10,
              marginBottom: 15,
            }}
          />
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_1')}>
              <Image source={img1_3} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_2')}>
              <Image source={img2} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_3')}>
              <Image source={img1_3} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
          </View>

          <Text style={styles.Salary}>The Salary Man</Text>
          <View
            style={{
              borderBottomColor: '#777790',
              borderBottomWidth: 1,
              marginTop: 10,
              marginBottom: 15,
            }}
          />
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_4')}>
              <Image source={img4} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_5')}>
              <Image source={img5} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_6')}>
              <Image source={img6} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
          </View>

          <Text style={styles.Kid}>Kids Are All Right</Text>
          <View
            style={{
              borderBottomColor: '#777790',
              borderBottomWidth: 1,
              marginTop: 10,
              marginBottom: 15,
            }}
          />
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_7')}>
              <Image source={img7} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_8')}>
              <Image source={img8} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Toon_9')}>
              <Image source={img9} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Cartoon;

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#E5EAFA',
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    position: 'absolute',
    top: 40,
    fontFamily: 'Fredoka-Medium',
    fontSize: 32,
    color: '#F4F6FD',
  },
  Lazy: {
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 16,
    color: '#2C2F4A',
  },
  Salary: {
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 16,
    color: '#2C2F4A',
    marginTop: 25,
  },
  Kid: {
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 16,
    color: '#2C2F4A',
    marginTop: 25,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
  },
});
