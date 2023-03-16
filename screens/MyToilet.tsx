import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import bgSUKA from '../assets/bgSUKA_4.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  CaretLeft,
  Plus,
  Wheelchair,
  Star,
  Clock,
  PencilSimple,
} from 'phosphor-react-native';

const {width} = Dimensions.get('window');
const aspectRatio = 380 / 500;
const height = width * aspectRatio;

const MyToilet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>

      <TouchableOpacity style={styles.btnBack_44}>
        <CaretLeft size={24} weight="bold" color="#2C2F4A" />
      </TouchableOpacity>

      <Text style={styles.title}>My Toilet</Text>

      <TouchableOpacity style={styles.btnAdd_44}>
        <Plus size={24} weight="bold" color="#E5EAFA" />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.itemLeftTop}>
            <View style={styles.tagFree}>
              <Text style={styles.textFree}>฿ Free</Text>
            </View>
            <View style={styles.tagHandicap}>
              <Wheelchair
                size={10}
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
              <Text style={styles.textType}>Public</Text>
            </View>
          </View>
          
          <View style={styles.itemMid}>
            <View style={styles.itemLeftMid}>
              <Text style={styles.placeName}>Place Name</Text>
              <View style={styles.itemRightBottom}>
                <Star
                  size={14}
                  weight="fill"
                  color="#FBD17B"
                  style={{
                    marginRight: 2,
                  }}
                />
                <Text style={styles.rate}>5.0</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btnEdit}>
              <PencilSimple size={14} weight="fill" color="#FFA897" />
            </TouchableOpacity>
          </View>
          

          <View style={styles.itemBottom}>
            <Clock
              size={14}
              weight="fill"
              color="#31C596"
              style={{
                marginRight: 5,
              }}
            />
            <Text style={styles.time}>
              00:00 - 00:00
            </Text>
          </View>
        </View>
      </View>
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
    color: '#fff',
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

  // Content
  contentContainer: {
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    paddingHorizontal: 14,
    paddingBottom: 12,
    paddingTop: 8,
  },
  content: {
    width: '100%',
  },
  itemLeftTop: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
    
  // Tag Free
  tagFree: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
    marginRight: 12,
    backgroundColor: '#0BF8AD',
    borderRadius: 20,
  },
  textFree: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 12,
    color: '#00845A',
    paddingLeft: 6,
    paddingRight: 6,
    paddingVertical: 2,
  },
    
  // Tag Handicap
  tagHandicap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
    marginRight: 12,
    backgroundColor: '#0BF8AD',
    borderRadius: 20,
  },
  textHandicap: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 12,
    color: '#00845A',
    paddingRight: 6,
    paddingVertical: 2,
  },
    
  // Tag Type
  tagType: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#CACCDA',
    borderRadius: 20,
  },
  textType: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 12,
    color: '#555568',
    marginLeft: 6,
    paddingRight: 6,
    paddingVertical: 2,
  },
    
  itemMid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemLeftMid: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  placeName: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#2C2F4A',
    marginRight: 12,
  },
  btnEdit: {
    backgroundColor: '#F4F6FD',
    width: 32,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
    
  itemBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLeftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  time: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#777790',
  },
  itemRightBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  rate: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#2C2F4A',
  },
});
