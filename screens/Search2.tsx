import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Image,
} from 'react-native'
import React, { useState } from 'react'
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
import { searchToilet } from '../services/search'

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
    } catch (err:any) {
      setErrorResult(err.msg);
    }
    setIsloading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.search} onPress={hardleSearch}>
            <MagnifyingGlass size={22} weight="bold" color="#777790" />
          </TouchableOpacity>
          <TextInput
            style={styles.field}
            placeholder='Search'
            onChangeText={text => setSearchInput(text)}
          />
          <TouchableOpacity style={styles.cancel}>
            <XCircle size={22} weight="fill" color="#BABCCA" />
          </TouchableOpacity>
        </View>
        { isLoading ? (
        <ActivityIndicator />
        ) : ResultPublic?.length > 0 ? (
          <FlatList
            data={ResultPublic}
            keyExtractor={(item:any) => String(item._id)}
            renderItem={({item}) => 
              { return <Text> {item.title} </Text>}
            }
          />
        ) : (
          <Text>{errorResult}</Text>
        )
      }
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