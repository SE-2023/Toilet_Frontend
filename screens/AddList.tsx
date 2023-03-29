import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bgSUKA from '../assets/bgSUKA_4.png';
import ContentMyList from '../components/ContentMyList';
import {getProfile} from '../services/auth';
import {getMyList} from '../services/myList';
import { X } from 'phosphor-react-native';
import Modal from 'react-native-modal';
import BrokenHeart from '../assets/BrokenHeart.png';

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
  const [modal, setModal] = useState(false);
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
          onSelected={value => {
            setModal(value);
          }}
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
          onSelected={value => {
            setModal(value);
          }}
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
          onSelected={value => {
            setModal(value);
          }}
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
          onSelected={value => {
            setModal(value);
          }}
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
          onSelected={value => {
            setModal(value);
          }}
        />
        <View style={{height: height * 0.08}} />
      </ScrollView>

      {/* Modal */}
      <Modal isVisible={modal}>
        <View style={styles.modalContainer}>
          <Image source={BrokenHeart} style={styles.imageBrokenHeart} />
          <View style={styles.detailPopupContainer}>
            <Text style={styles.titlePopup}>Do you want to delete this toilet ?</Text>
            <TouchableOpacity style={styles.btnYes}>
              <Text style={styles.textYes}>YES, DELETE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModal(false)}>
              <Text style={styles.textCancel}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

  // Modal
  modalContainer: {
    backgroundColor: '#F4F6FD',
    borderRadius: 8,
    marginHorizontal: 40,
  },
  detailPopupContainer: {
    paddingHorizontal: 20,
  },
  imageBrokenHeart: {
    width: 190,
    height: 140,
    marginTop: -75,
    alignSelf: 'center',
  },
  titlePopup: {
    fontSize: 22,
    fontFamily: 'Fredoka-Medium',
    color: '#2C2F4A',
    marginTop: 20,
    textAlign: 'center',
  },
  btnYes: {
    backgroundColor: '#6D7DD3',
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 15,
    elevation: 3,
  },
  textYes: {
    fontSize: 16,
    fontFamily: 'Fredoka-SemiBold',
    color: '#F4F6FD',
  },
  textCancel: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 14,
    fontFamily: 'Fredoka-Medium',
    color: '#2C2F4A',
  },
});
