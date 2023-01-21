import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native'
import { CaretLeft, CaretRight, EnvelopeSimple, Key } from 'phosphor-react-native'


const Page1 = ({navigation}: {navigation: any}) => {
  return (
    <View>
        <TouchableOpacity style={styles.btnBack}
        onPress={() => navigation.navigate('Login')}>
          <CaretLeft
            size={24}
            weight='bold'
            color='#FFA897'
            style={{
              position: 'absolute',
              left: 15,
              top: 12
            }}
          />
          <Text style={{color: '#FFA897', fontFamily: 'Fredoka-SemiBold', fontSize: 16, position: 'absolute', right: 22, top: 14}}>
            MAP
          </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#F4F6FD"
    },
    logo: {
      marginBottom: 30,
      marginTop: -2,
      width: 150,
      height: 180
    },
    title: {
      position: 'absolute',
      top: 40,
      left: '28%',
      fontFamily: 'Fredoka-SemiBold',
      fontSize: 64,
      color: '#2C2F4A'
    },
    textBody: {
      paddingTop: 30,
      paddingBottom: 40,
      textAlign: 'center',
      fontFamily: 'Fredoka-Regular',
      fontSize: 16,
      color: '#2C2F4A'
    },
    textButton: {
      fontFamily: 'Fredoka-SemiBold',
      fontSize: 16,
      color: '#6D7DD3'
    },
  
    btnContinue: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      width: 145,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      elevation: 2
    },
    btnContinuePosition: {
      paddingRight: 16,
      alignItems: 'flex-end'
    },
  
    btnBack: {
      backgroundColor: '#2C2F4A',
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      width: 100,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      elevation: 2
    },
    btnBackPosition: {
      position: 'relative',
      bottom: 48,
      paddingLeft: 16,
      alignItems: 'flex-start'
    },
    textInput: {
      color: '#F4F6FD',
      paddingLeft: 16,
      paddingRight: 16
    }
  })

export default Page1