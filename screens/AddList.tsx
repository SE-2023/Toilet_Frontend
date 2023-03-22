import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
import bgSUKA from '../assets/bgSUKA_4.png';
import ContentMyList from '../components/ContentMyList';

const {width} = Dimensions.get('window');
const aspectRatio = 290 / 500;
const height = width * aspectRatio;

const AddList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>

      <Text style={styles.title}>My List</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ContentMyList/>
        <ContentMyList/>
        <ContentMyList/>
        <ContentMyList/>
        <ContentMyList/>
        <View style={{height: height * 0.08}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAFA',
    paddingHorizontal: 16,
  },

  // Header
  title: {
    position: 'absolute',
    top: 40,
    left: 16,
    fontFamily: 'Fredoka-Medium',
    fontSize: 32,
    color: '#2C2F4A',
  },
});
