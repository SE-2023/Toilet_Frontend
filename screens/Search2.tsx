import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Image,
  ScrollView,
} from 'react-native'

import React, { useState } from 'react'
import {MagnifyingGlass} from 'phosphor-react-native';
import bgSUKA from '../assets/bgSUKA_4.png';
import Search from '../components/Search'
import { searchToilet } from '../services/search'

const {width} = Dimensions.get('window');
const aspectRatio = 300 / 500;
const height = width * aspectRatio;

const Search2 = () => {
  const [isLoading, setIsloading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [ResultPublic, setResultPublic] = useState([]);
  const [ResultPrivate, setResultPrivate] = useState([]);
  const [errorResult, setErrorResult] = useState("");

  const hardleSearch = async () => {
    setIsloading(true);
    try {
      setResultPublic([]);
      setResultPrivate([]);
      const toilets: any = await searchToilet(searchInput);
      // console.log(toilets.publicToilet);
      // console.log(toilets.privateToilet);
      setResultPublic(toilets.publicToilet);
      setResultPrivate(toilets.privateToilet);
    } catch (err: any) {
      setErrorResult(err.msg);
    }
    setIsloading(false);
  };

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


  contentContainer: {
    marginVertical: 20,
    backgroundColor: '#2C2F4A',
    borderRadius: 8,
    borderColor: '#ccc',
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 10
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
    fontSize: 16,
    color: '#fff',
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
    color: '#ABADBB',
  },
  itemRightBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  rate: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#fff',
  },
})