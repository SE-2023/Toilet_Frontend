import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native'
import React from 'react'
import {MagnifyingGlass} from 'phosphor-react-native';
import bgSUKA from '../assets/bgSUKA_4.png';
import Search from '../components/Search'

const {width} = Dimensions.get('window');
const aspectRatio = 300 / 500;
const height = width * aspectRatio;

const Search2 = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inner}>
          <TextInput style={styles.field} placeholder='Search'/>
          <TouchableOpacity style={styles.search}>
            <MagnifyingGlass size={22} weight="bold" color="#777790" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <Search />
        <Search />
        <Search />
        <Search />
        <Search />
        <Search />
        <View style={{height: height * 0.1}} />
      </ScrollView>
    </View>
  )
}

export default Search2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAFA',
  },
  searchContainer: {
    position: 'absolute',
    marginHorizontal: 25,
    marginTop: 60,
    elevation: 3,
  },
  inner: {
    flexDirection: 'row',
  },
  field: {
    backgroundColor: '#fff',
    height: 39,
    width: '100%',
    borderRadius: 3,
    paddingLeft: 16,
    paddingRight: 50,
    paddingVertical: 10,
    fontFamily: 'Fredoka-Regular',
  },
  search: {
    position: 'absolute',
    top: 8.5,
    right: 12,
    zIndex: 1,
  },
})