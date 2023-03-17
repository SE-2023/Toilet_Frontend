import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StarReview from './StarReview'

const StarRating = () => {
    const [rating, setRating] = useState(0);
  return (
    <View>
        <Text>
        {Array(5)
        .fill(5)
        .map((_, index) => (
          <StarReview 
           key={index} 
           filled={index < rating} 
           onClick={() => setRating(index + 1)} />
        ))}
        </Text>
    </View>
  )
}

export default StarRating

const styles = StyleSheet.create({})