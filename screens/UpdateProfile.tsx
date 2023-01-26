import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Platform,
} from 'react-native';
import bgSUKA from '../assets/bgSUKA_4.png';
import profile from '../assets/profile.jpg';
import {Check, Camera, X} from 'phosphor-react-native';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width} = Dimensions.get('window');
const aspectRatio = 500 / 500;
const height = width * aspectRatio;

function UpdateProfile() {
  const [fristname, setFristname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.space}>
        <View style={{alignItems: 'center'}}>
          <View
            // borderBottomLeftRadius={60}
            // overflow='hidden'
            height={height * 0.4}>
            <Image source={bgSUKA} style={{width, height}} />
          </View>
        </View>

        <TouchableOpacity style={styles.btnX_44}>
          <X size={24} weight="fill" color="#D75D5D" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCheck_44}>
          <Check size={24} weight="fill" color="#31C596" />
        </TouchableOpacity>

        <View style={styles.box}>
          <TouchableOpacity style={styles.btnCircle_34}>
            <Camera size={18} weight="fill" color="#FFA897" />
          </TouchableOpacity>

          <View style={styles.circle}></View>

          <Image source={profile} style={styles.profile} />

          <View style={styles.textInputSmall}>
            <View>
              <TextInput
                label="Fristname"
                value={fristname}
                theme={theme}
                style={styles.bgTextInput}
                mode="outlined"
                onChangeText={text => setFristname(text)}
              />
            </View>

            <View style={styles.textInputRight}>
              <TextInput
                label="Lastname"
                value={lastname}
                theme={theme}
                style={styles.bgTextInput}
                mode="outlined"
                onChangeText={text => setLastname(text)}
              />
            </View>
          </View>

          <View style={styles.textInput}>
            <View style={{paddingBottom: 20}}>
              <TextInput
                label="Phone number"
                value={phoneNum}
                theme={theme}
                style={styles.bgTextInput}
                mode="outlined"
                onChangeText={text => setPhoneNum(text)}
              />
            </View>

            <View style={{paddingBottom: 20}}>
              <TextInput
                label="Email"
                value={email}
                theme={theme}
                style={styles.bgTextInput}
                mode="outlined"
                onChangeText={text => setEmail(text)}
              />
            </View>

            <View style={{paddingBottom: 20}}>
              <TextInput
                label="Password"
                value={password}
                theme={theme}
                style={styles.bgTextInput}
                mode="outlined"
                secureTextEntry
                // right={<TextInput.Icon icon="eye" />}
                onChangeText={text => setPassword(text)}
              />
            </View>

            <View>
              <TextInput
                label="Confirm Password"
                value={conPassword}
                theme={theme}
                style={styles.bgTextInput}
                mode="outlined"
                secureTextEntry
                // right={<TextInput.Icon icon="eye" />}
                onChangeText={text => setConPassword(text)}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View style={{height: 20}} />
    </KeyboardAwareScrollView>
  );
}

const theme = {
  colors: {
    primary: '#6D7DD3',
  },
  fonts: {
    regular: {
      fontFamily: 'Fredoka-Regular',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAFA',
  },

  space: {
    paddingHorizontal: 16,
  },

  // Header
  title: {
    position: 'absolute',
    top: 40,
    left: 16,
    fontFamily: 'Fredoka-Medium',
    fontSize: 32,
    color: '#F4F6FD',
  },
  btnCheck_44: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 30,
    backgroundColor: '#F4F6FD',
    top: 35,
    right: 16,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnX_44: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 30,
    backgroundColor: '#F4F6FD',
    top: 35,
    left: 16,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Profile
  box: {
    marginTop: -50,
    alignSelf: 'center',
    width: '100%',
    height: 460,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 4,
  },
  name: {
    alignSelf: 'center',
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 24,
    color: '#2C2F4A',
    paddingTop: 26,
    paddingBottom: 20,
  },
  phoneNum: {
    alignSelf: 'center',
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    color: '#777790',
    paddingBottom: 5,
  },
  email: {
    alignSelf: 'center',
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    color: '#777790',
  },
  circle: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: -60,
    backgroundColor: '#FFFFFF',
  },
  profile: {
    alignSelf: 'center',
    width: 104,
    height: 104,
    borderRadius: 100,
    marginTop: -112,
  },
  btnCircle_34: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 20,
    top: 18,
    right: 122,
    backgroundColor: '#2C2F4A',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  textInput: {
    color: '#F4F6FD',
    paddingLeft: 16,
    paddingRight: 16,
    top: -36,
  },
  textInputSmall: {
    color: '#F4F6FD',
    width: 182,
    paddingLeft: 16,
    paddingTop: 20,
  },
  textInputRight: {
    position: 'relative',
    top: -56,
    left: 181,
  },
  bgTextInput: {
    backgroundColor: '#F4F6FD',
    fontFamily: 'Fredoka-Regular',
  },
});

export default UpdateProfile;
