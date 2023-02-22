import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import profile from '../assets/profile.jpg'
import {Star} from 'phosphor-react-native'
import toilet from '../assets/toilet.jpg';

const Review = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileContainer}>
        <Image source={profile} style={styles.imageProfile}/>
        <View>
          <Text style={styles.textName}>Name</Text>
          <View style={styles.starContainer}>
            <Star size={16} weight="fill" color="#FAC353" />
            <Star size={16} weight="fill" color="#FAC353" />
            <Star size={16} weight="fill" color="#FAC353" />
            <Star size={16} weight="fill" color="#FAC353" />
            <Star size={16} weight="fill" color="#BABCCA" />
            <Text style={styles.textDate}>20/02/2023  14:30</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.reviewContainer}>
        <Text style={styles.textReview}>Wow, what a beautiful bathroom!
         The tiles on the walls and floor are so elegantly arranged,
          and the color scheme is so soothing to the eyes.</Text>

        <View style={styles.allImageReview}>
          <TouchableOpacity>
            <Image source={toilet} style={styles.imageToilet}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={toilet} style={styles.imageToilet}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={toilet} style={styles.imageToilet}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={toilet} style={styles.imageToilet}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Review

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginBottom: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {
    width: 41,
    height: 41,
    borderRadius: 22,
    marginRight: 10,
  },
  textName: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
    color: '#2C2F4A',
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDate: {
    fontSize: 12,
    fontFamily: 'Fredoka-Regular',
    color: '#777790',
    marginLeft: 10,
  },
  reviewContainer: {
    marginTop: 10,
  },
  textReview: {
    fontSize: 14,
    fontFamily: 'Fredoka-Regular',
    color: '#2C2F4A',
    marginBottom: 10,
  },
  allImageReview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageToilet: {
    width: 80,
    height: 80,
  },
})