import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Wheelchair,
    Star,
    Clock,
} from 'phosphor-react-native';

const Search = () => {
  return (
    <View style={styles.container}>
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

        <Text style={styles.placeName}>Place Name</Text>

        <View style={styles.itemBottom}>
          <View style={styles.itemLeftBottom}>
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
        </View>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 16,
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
    
  placeName: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#2C2F4A',
    marginBottom: 8,
  },
    
  itemBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
})