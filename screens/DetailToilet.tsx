import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import toilet from '../assets/toilet.jpg';
import {
  CaretLeft,
  Clock,
  Phone,
  Wheelchair,
  Heart,
  Star,
  CaretRight,
} from 'phosphor-react-native';
import wc from '../assets/wc.png';
import Review from '../components/Review';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {AddToiletParamList} from '../stacks/AddToiletStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeParamList} from '../stacks/HomeStack';

const {width} = Dimensions.get('window');
const aspectRatio = 360 / 400;
const height = width * aspectRatio;

const DetailToilet = () => {
  const {params} = useRoute<RouteProp<HomeParamList, 'DetailToilet'>>();
  console.log(params);
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();
  return (
    <View style={styles.container}>
      <View style={{height: height * 0.4}}>
        <Image source={toilet} style={{width, height}} />
      </View>
      <TouchableOpacity style={styles.btnBack}>
        <CaretLeft size={24} weight="bold" color="#2C2F4A" />
      </TouchableOpacity>

      <View>
        <ScrollView>
          <View style={{height: height * 0.5}}></View>
          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{params.title}</Text>
            </View>

            <View style={styles.tagContainer}>
              <View style={styles.tagFree}>
                <Text style={styles.textFree}>฿ Free</Text>
              </View>

              <View style={styles.tagHandicap}>
                <Wheelchair
                  size={14}
                  weight="fill"
                  color="#00845A"
                  style={{
                    marginRight: 2,
                    marginLeft: 6,
                  }}
                />
                <Text style={styles.textHandicap}>Handicap access</Text>
              </View>

              <View style={styles.tagType}>
                <Image source={wc} style={styles.iconType} />
                <Text style={styles.textType}>Public</Text>
              </View>
            </View>

            <View style={styles.detailContainer}>
              <View style={styles.timeContainer}>
                <Clock
                  size={16}
                  weight="fill"
                  color="#31C596"
                  style={{
                    marginRight: 6,
                  }}
                />
                <Text style={styles.time}>00:00 - 00:00</Text>
              </View>
              <View style={styles.phoneContainer}>
                <Phone
                  size={16}
                  weight="fill"
                  color="#6D7DD3"
                  style={{
                    marginRight: 6,
                  }}
                />
                <Text style={styles.phone}>000-000-0000</Text>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnHeart}>
                <Heart size={20} color="#777790" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnReserve}>
                <Text style={styles.textReserve}>RESERVE</Text>
                <Text style={styles.textPrice}> (฿ 0)</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.btnRate}
              onPress={() => navigation.navigate('Ratings')}>
              <View style={styles.itemLeft}>
                <Text style={styles.titleRate}>Rate</Text>
                <Star size={17} weight="fill" color="#FAC353" />
                <Text style={styles.textRate}>4.5</Text>
                <Text style={styles.textReview}>(0 Reviews)</Text>
              </View>
              <CaretRight size={22} color="#2C2F4A" />
            </TouchableOpacity>

            <View style={styles.reviewContainer}>
              <Review />
            </View>
          </View>
          <View
            style={{height: height * 0.25, backgroundColor: '#F4F6FD'}}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailToilet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btnBack: {
    position: 'absolute',
    top: 25,
    left: 25,
  },
  mainContainer: {
    backgroundColor: '#F4F6FD',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  titleContainer: {
    marginHorizontal: 25,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Fredoka-SemiBold',
    color: '#2C2F4A',
  },

  // Tag
  tagContainer: {
    marginHorizontal: 25,
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagFree: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 12,
    marginRight: 16,
    paddingHorizontal: 2,
    backgroundColor: '#0BF8AD',
    borderRadius: 20,
  },
  textFree: {
    fontSize: 14,
    fontFamily: 'Fredoka-Regular',
    color: '#00845A',
    paddingLeft: 6,
    paddingRight: 6,
    paddingVertical: 2,
  },
  tagHandicap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 12,
    marginRight: 16,
    paddingHorizontal: 2,
    backgroundColor: '#0BF8AD',
    borderRadius: 20,
  },
  textHandicap: {
    fontSize: 14,
    fontFamily: 'Fredoka-Regular',
    color: '#00845A',
    paddingRight: 6,
    paddingVertical: 2,
  },
  tagType: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 12,
    paddingHorizontal: 2,
    backgroundColor: '#CACCDA',
    borderRadius: 20,
  },
  iconType: {
    width: 12,
    height: 12,
    marginRight: 2,
    marginLeft: 6,
    opacity: 0.6,
  },
  textType: {
    fontSize: 14,
    fontFamily: 'Fredoka-Regular',
    color: '#555568',
    paddingRight: 6,
    paddingVertical: 2,
  },

  // Detail
  detailContainer: {
    marginHorizontal: 25,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  time: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
    color: '#2C2F4A',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  phone: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
    color: '#2C2F4A',
    marginRight: 42,
  },

  // Button
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 15,
  },
  btnHeart: {
    width: 44,
    height: 44,
    backgroundColor: '#F4F6FD',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#777790',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnReserve: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6D7DD3',
    width: '84%',
    height: 44,
    borderRadius: 8,
    elevation: 3,
  },
  textReserve: {
    fontSize: 16,
    fontFamily: 'Fredoka-Medium',
    color: '#fff',
  },
  textPrice: {
    fontSize: 16,
    fontFamily: 'Fredoka-Medium',
    color: '#F4F6FD',
  },

  btnRate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 30,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRate: {
    fontSize: 20,
    fontFamily: 'Fredoka-Medium',
    color: '#2C2F4A',
    marginRight: 8,
  },
  textRate: {
    fontSize: 15,
    fontFamily: 'Fredoka-Regular',
    color: '#2C2F4A',
    marginLeft: 2,
    marginRight: 6,
  },
  textReview: {
    fontSize: 15,
    fontFamily: 'Fredoka-Regular',
    color: '#777790',
  },
  reviewContainer: {
    marginHorizontal: 25,
  },
});
