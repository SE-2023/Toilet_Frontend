import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {MagnifyingGlass} from 'phosphor-react-native';
import bgSUKA from '../assets/bgSUKA_4.png';
import SearchResult from '../components/Search';
import {searchToilet} from '../services/search';
import { HomeParamList } from '../stacks/HomeStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface ISearch {
  free: boolean;
  handicap: boolean;
  type: string;
  title: string;
  timeOpen: string;
  timeClose: string;
  rating: string;
}

const {width} = Dimensions.get('window');
const aspectRatio = 300 / 500;
const height = width * aspectRatio;

const Search = () => {
  const [isLoading, setIsloading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState<ISearch[]>([]);
  const [errorResult, setErrorResult] = useState('');

  const hardleSearch = async () => {
    setIsloading(true);
    try {
      setResults([]);
      console.log(results);
      const toilets: any = await searchToilet(searchInput);
      setResults(toilets.Toilet);
      console.log(toilets.Toilet);
    } catch (err: any) {
      setErrorResult(err.msg);
    }
    setIsloading(false);
  };
  const Result = (): JSX.Element | null => {
    const navigation =
      useNavigation<NativeStackNavigationProp<HomeParamList>>();
      return(
        <>
        {results.map((item: any, index) =>{
          if(item!== undefined){
            const onClick = () =>{
              if(item){
                navigation.navigate('DetailToilet',{
                  _id: item._id,
                  latitude: item.latitude,
                  longitude: item.longitude,
                  title: item.title,
                  contact: item.contact,
                  cost: item.cost,
                  handicap: item.handicap,
                  free: item.free,
                  type: item.type,
                  timeOpen: item.timeOpen,
                  timeClose: item.timeClose,
                  toiletpicture: item.toiletpicture
                });
              };
            };
            return(
            <TouchableOpacity key={index} onPress={onClick}>
             <SearchResult
              free={item.free}
              handicap={item.handicap}
              type={item.type}
              placename={item.title}
              timeOpen={item.timeOpen}
              timeClose={item.timeClose}
              rating={item.rating}
            />
            </TouchableOpacity>
            )
          }
        })}
        </>
      )
  }
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inner}>
          <TextInput
            style={styles.field}
            placeholder="Search"
            value={searchInput}
            onChangeText={text => setSearchInput(text)}
          />
          <TouchableOpacity style={styles.search} onPress={hardleSearch}>
            <MagnifyingGlass size={22} weight="bold" color="#777790" />
          </TouchableOpacity>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : results?.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Result></Result>
          <View style={{height: height * 0.1}} />
        </ScrollView>
      ) : (
        <Text>{errorResult}</Text>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAFA',
  },
  searchContainer: {
    position: 'absolute',
    marginHorizontal: 16,
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
});
