import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import React from 'react'
import {
  MagnifyingGlass,
  XCircle,
  Wheelchair,
  ForkKnife,
  Tote,
  GasPump,
  House,
} from 'phosphor-react-native';
import wc from '../assets/wc.png';

const Search2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inner}>
          <View style={styles.search} pointerEvents='none'>
            <MagnifyingGlass size={22} weight="bold" color="#777790" />
          </View>
          <TextInput style={styles.field} placeholder='Search'/>
          <TouchableOpacity style={styles.cancel}>
            <XCircle size={22} weight="fill" color="#BABCCA" />
          </TouchableOpacity>
        </View>
      </View>
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
    marginHorizontal: 25,
    marginTop: 58,
    elevation: 3,
  },
  inner: {
    flexDirection: 'row',
  },
  search: {
    position: 'absolute',
    top: 8.5,
    left: 14,
    zIndex: 1,
  },
  field: {
    backgroundColor: '#fff',
    height: 39,
    width: '100%',
    borderRadius: 3,
    paddingHorizontal: 50,
    paddingVertical: 10,
    fontFamily: 'Fredoka-Regular',
  },
  cancel: {
    position: 'absolute',
    top: 8.5,
    right: 14,
    zIndex: 1,
  },
})