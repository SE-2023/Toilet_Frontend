import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bgSUKA from '../assets/bgSUKA_4.png';
import ContentMyList from '../components/ContentMyList';
import {getProfile} from '../services/auth';
import {getMyList} from '../services/myList';

export interface IProfile {
  _id: string;
}

interface myList {
  toiletId: string;
  userId: string;
}

const {width} = Dimensions.get('window');
const aspectRatio = 290 / 500;
const height = width * aspectRatio;

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const AddList = () => {
  const [myList, setMyList] = useState<myList[]>([]);
  const [checkData, setCheckData] = useState('');
  const getUserProfile = async () => {
    const {data} = await getProfile();
    const list: any = await getMyList(data._id);
    setMyList(list.myList);
    setCheckData(list.message);
  };

  useEffect(() => {
    getUserProfile();
    console.log('********************************', myList);
    console.log('********************************', checkData);
  }, []);

  const RenderMyList = (): JSX.Element | null => {
    if (checkData === 'success' && myList[0] !== undefined) {
      return (
        <>
          {myList.map((item: any, index) => {
            return <></>;
          })}
        </>
      );
    } else {
      return null;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>

      <Text style={styles.title}>My List</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentMyList
          _id={''}
          latitude={0}
          longitude={0}
          title={''}
          contact={''}
          cost={''}
          handicap={false}
          free={false}
          type={''}
          timeOpen={''}
          timeClose={''}
          toiletpicture={''}
        />
        <ContentMyList
          _id={''}
          latitude={0}
          longitude={0}
          title={''}
          contact={''}
          cost={''}
          handicap={false}
          free={false}
          type={''}
          timeOpen={''}
          timeClose={''}
          toiletpicture={''}
        />
        <ContentMyList
          _id={''}
          latitude={0}
          longitude={0}
          title={''}
          contact={''}
          cost={''}
          handicap={false}
          free={false}
          type={''}
          timeOpen={''}
          timeClose={''}
          toiletpicture={''}
        />
        <ContentMyList
          _id={''}
          latitude={0}
          longitude={0}
          title={''}
          contact={''}
          cost={''}
          handicap={false}
          free={false}
          type={''}
          timeOpen={''}
          timeClose={''}
          toiletpicture={''}
        />
        <ContentMyList
          _id={''}
          latitude={0}
          longitude={0}
          title={''}
          contact={''}
          cost={''}
          handicap={false}
          free={false}
          type={''}
          timeOpen={''}
          timeClose={''}
          toiletpicture={''}
        />
        <View style={{height: height * 0.08}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddList;

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
    left: 16,
    fontFamily: 'Fredoka-Medium',
    fontSize: 32,
    color: '#2C2F4A',
  },
});
