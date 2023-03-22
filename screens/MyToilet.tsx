import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bgSUKA from '../assets/bgSUKA_4.png';
import {CaretLeft, Plus} from 'phosphor-react-native';
import ContentMyToilet from '../components/ContentMyToilet';
import {HomeParamList} from '../stacks/HomeStack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileParamList} from '../stacks/ProfileStack';
import {AddToiletParamList} from '../stacks/AddToiletStack';
import {getMytoilet} from '../services/toilet';
import NotRating from '../components/NotRating';

interface Mytoilet {
  _id: string;
  latitude: number;
  longitude: number;
  title: string;
  contact: string;
  cost: string;
  handicap: boolean;
  free: boolean;
  type: string;
  timeOpen: string;
  timeClose: string;
  toiletpicture: string;
}
const {width} = Dimensions.get('window');
const aspectRatio = 290 / 500;
const height = width * aspectRatio;

const MyToilet = () => {
  const {params} = useRoute<RouteProp<ProfileParamList, 'MyToilet'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileParamList>>();
  const navigationAddToilet =
    useNavigation<NativeStackNavigationProp<AddToiletParamList>>();
  const [userId, setUserId] = useState(params.CreateBy);
  const [myList, setMyList] = useState<Mytoilet[]>([]);
  const [checkData, setCheckData] = useState('');

  useEffect(() => {
    console.log(userId);
    const fetchData = async () => {
      try {
        const myList: any = await getMytoilet(userId);
        // console.log(comments.data);
        setMyList(myList.Mytoilet);
        setCheckData(myList.message);
      } catch (err: any) {
        setCheckData(err.message);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const RenderMytoilet = (): JSX.Element | null => {
    if (checkData === 'success') {
      return (
        <>
          {myList.map((item: any, index) => {
            return (
              <ContentMyToilet
                key={index}
                _id={''}
                latitude={0}
                longitude={0}
                title={item.title}
                contact={''}
                cost={''}
                handicap={false}
                free={false}
                type={item.type}
                timeOpen={''}
                timeClose={''}
                toiletpicture={''}
              />
            );
          })}
        </>
      );
    } else {
      return (
        <>
          <NotRating></NotRating>
        </>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnBack_44}
        onPress={() => navigation.goBack()}>
        <CaretLeft size={24} weight="bold" color="#2C2F4A" />
      </TouchableOpacity>

      <Text style={styles.title}>My Toilet</Text>

      <TouchableOpacity
        style={styles.btnAdd_44}
        onPress={() => navigationAddToilet.navigate('AddToilet')}>
        <Plus size={24} weight="bold" color="#E5EAFA" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderMytoilet></RenderMytoilet>

        <View style={{height: height * 0.08}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyToilet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAFA',
    paddingHorizontal: 16,
  },

  // Header
  title: {
    position: 'absolute',
    top: 40,
    left: 74,
    fontFamily: 'Fredoka-Medium',
    fontSize: 32,
    color: '#2C2F4A',
  },
  btnBack_44: {
    position: 'absolute',
    backgroundColor: '#F4F6FD',
    width: 44,
    height: 44,
    borderRadius: 30,
    top: 37,
    left: 16,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAdd_44: {
    position: 'absolute',
    backgroundColor: '#2C2F4A',
    width: 44,
    height: 44,
    borderRadius: 30,
    top: 37,
    right: 16,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
