import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import bgSUKA from '../assets/bgSUKA_4.png';
import {CaretLeft, Plus} from 'phosphor-react-native';
import ContentMyToilet from '../components/ContentMyToilet';
import {HomeParamList} from '../stacks/HomeStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileParamList} from '../stacks/ProfileStack';
import {AddToiletParamList} from '../stacks/AddToiletStack';

const {width} = Dimensions.get('window');
const aspectRatio = 290 / 500;
const height = width * aspectRatio;

const MyToilet = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileParamList>>();
  const navigationAddToilet =
    useNavigation<NativeStackNavigationProp<AddToiletParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnBack_44}
        onPress={() => navigation.goBack()}>
        <CaretLeft size={24} weight="bold" color="#2C2F4A" />
      </TouchableOpacity>

      <Text style={styles.title}>My Toilet</Text>

      <TouchableOpacity
        style={styles.btnAdd_44}
        onPress={() => navigationAddToilet.navigate('AddToilet')}>
        <Plus size={24} weight="bold" color="#E5EAFA" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentMyToilet />
        <ContentMyToilet />
        <ContentMyToilet />
        <ContentMyToilet />
        <ContentMyToilet />
        <ContentMyToilet />
        
        <View style={{height: height * 0.08}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyToilet;

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
    left: 74,
    fontFamily: 'Fredoka-Medium',
    fontSize: 32,
    color: '#2C2F4A',
  },
  btnBack_44: {
    position: 'absolute',
    backgroundColor: '#F4F6FD',
    width: 44,
    height: 44,
    borderRadius: 30,
    top: 37,
    left: 16,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAdd_44: {
    position: 'absolute',
    backgroundColor: '#2C2F4A',
    width: 44,
    height: 44,
    borderRadius: 30,
    top: 37,
    right: 16,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
