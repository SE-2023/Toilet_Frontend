import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native'
import bgSUKA from '../assets/bgSUKA.png'
import { CaretLeft, CaretRight, EnvelopeSimple, Key } from 'phosphor-react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-paper';
// import OutlineInput from 'react-native-outline-input'

const { width } = Dimensions.get('window');
const aspectRatio = 500 / 500;
const height = width * aspectRatio;

function SignUp({navigation}: {navigation: any}) {
  const [fristname, setFristname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={{alignItems: 'center'}}>
        <View
          // borderBottomLeftRadius={60}
          // overflow='hidden'
          height={height * 0.4}
        >
          <Image
            source={bgSUKA}
            style={{width, height}}
          />
        </View>
      </View>

      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.textInputSmall}>
        <View>
          <TextInput
            label='Fristname'
            value={fristname}
            theme = {theme}
            style={styles.bgTextInput}
            mode = 'outlined'
            onChangeText={text => setFristname(text)}
          />
        </View>

        <View style={styles.textInputRight}>
          <TextInput
            label='Lastname'
            value={lastname}
            theme = {theme}
            style={styles.bgTextInput}
            mode = 'outlined'
            onChangeText={text => setLastname(text)}
          />
        </View>
      </View>

      <View style={styles.textInput}>
        <View style={{paddingBottom: 20}}>
          <TextInput
            label='Phone number'
            value={phoneNum}
            theme = {theme}
            style={styles.bgTextInput}
            mode = 'outlined'
            onChangeText={text => setPhoneNum(text)}
          />
        </View>

        <View style={{paddingBottom: 20}}>
          <TextInput
            label='Email'
            value={email}
            theme = {theme}
            style={styles.bgTextInput}
            mode = 'outlined'
            onChangeText={text => setEmail(text)}
          />
        </View>
        
        <View style={{paddingBottom: 20}}>
          <TextInput
            label='Password'
            value={password}
            theme = {theme}
            style={styles.bgTextInput}
            mode = 'outlined'
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View>
          <TextInput
            label='Confirm Password'
            value={conPassword}
            theme = {theme}
            style={styles.bgTextInput}
            mode = 'outlined'
            onChangeText={text => setConPassword(text)}
          />
        </View>
      </View>
        
      <Text style={styles.textBody}>
        Already have account?
        <Text style={styles.textButton} onPress={() => navigation.navigate('Login')}> LOG IN</Text>
      </Text>
      
      <View style={styles.btnContinuePosition}>
      <LinearGradient colors={['#FAC353', '#FFA897']} style={styles.btnContinue}>
        <Text style={{color: '#2C2F4A', fontFamily: 'Fredoka-SemiBold', fontSize: 16, position: 'absolute', left: 22, top: 14}}>
          CONTINUE
        </Text>
        <CaretRight
            size={24}
            weight='bold'
            color='#2C2F4A'
            style={{
              position: 'absolute',
              right: 15,
              top: 12
            }}
          />
      </LinearGradient>
      </View>

      <View style={styles.btnBackPosition}>
        <TouchableOpacity style={styles.btnBack}>
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
          {/* <GradientText text= 'MAP' style={{fontFamily: 'Fredoka-SemiBold', fontSize: 16}}/> */}
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

const theme = {
  colors: {
    primary: '#6D7DD3'
  },
  fonts: {
    regular: {
      fontFamily: 'Fredoka-Regular'
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F4F6FD"
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
    paddingBottom: 32,
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
    paddingRight: 16,
    top: -36
  },
  textInputSmall: {
    color: '#F4F6FD',
    width: 198,
    paddingLeft: 16
  },
  textInputRight: {
    position: 'relative',
    top: -56,
    left: 197
  },
  bgTextInput: {
    backgroundColor: '#F4F6FD',
    fontFamily: 'Fredoka-Regular'
  }
})

export default SignUp