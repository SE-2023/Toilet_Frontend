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
import {getMyList,deleteMyList} from '../services/myList';
import {X} from 'phosphor-react-native';
import Modal from 'react-native-modal';
import BrokenHeart from '../assets/BrokenHeart.png';
import ButtonHeart from '../components/ButtonHeart';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../stacks/BottomTabStack';
import { HomeParamList } from '../stacks/HomeStack';

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
  const[myListID, setMyListID] = useState('');
  const [first, setfirst] = useState(Boolean)
  const navigation = useNavigation<NativeStackNavigationProp<BottomTabParamList>>();
  const getUserProfile = async () => {
    const {data} = await getProfile();

    const list: any = await getMyList(data._id);
    await setMyList(list.myList);
    await setCheckData(list.message);
  };
  useEffect(() => {
    getUserProfile();
  },[modal]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserProfile();
    });
    return unsubscribe;
    
  }, [navigation]);   
  const RenderMyList = (): JSX.Element | null => {
    const navigation =
      useNavigation<NativeStackNavigationProp<HomeParamList>>();
    if (checkData === 'success' && myList[0] !== undefined) {
      return (
        <>
          {myList.map((item: any, index) => {
            if (item.myListPrivate[0] !== undefined) {
              const onClick = () => {
                console.log('call api detail toilet', item);
                if (item) {
                  navigation.navigate('DetailToilet', {
                    _id: item.myListPrivate[0]._id,
                    latitude: item.myListPrivate[0].latitude,
                    longitude: item.myListPrivate[0].longitude,
                    title: item.myListPrivate[0].title,
                    contact: item.myListPrivate[0].contact,
                    cost: item.myListPrivate[0].cost,
                    handicap: item.myListPrivate[0].handicap,
                    free: item.myListPrivate[0].free,
                    type: item.myListPrivate[0].type,
                    timeOpen: item.myListPrivate[0].timeOpen,
                    timeClose: item.myListPrivate[0].timeClose,
                    toiletpicture: item.myListPrivate[0].toiletpicture,
                  });
                }
              };
              return (
                <TouchableOpacity key={index} onPress={onClick}>
                <ContentMyList
                  myListId={item._id}
                  _id={item.myListPrivate[0]._id}
                  latitude={item.myListPrivate[0].latitude}
                  longitude={item.myListPrivate[0].longitude}
                  title={item.myListPrivate[0].title}
                  contact={item.myListPrivate[0].contact}
                  cost={item.myListPrivate[0].cost}
                  handicap={item.myListPrivate[0].handicap}
                  free={item.myListPrivate[0].free}
                  type={item.myListPrivate[0].type}
                  timeOpen={item.myListPrivate[0].timeOpen}
                  timeClose={item.myListPrivate[0].timeClose}
                  toiletpicture={item.myListPrivate[0].toiletpicture}
                  onSelected={value => {
                    setModal(value);
                  }}
                  onClick = {value =>{
                    setMyListID(value);
                  }}
                />
                </TouchableOpacity>
              );
            }
            if (item.myListPublic[0] !== undefined) {
              const onClick = () => {
                console.log('call api detail toilet', item);
                if (item) {
                  navigation.navigate('DetailToilet', {
                    _id: item.myListPublic[0]._id,
                    latitude: item.myListPublic[0].latitude,
                    longitude: item.myListPublic[0].longitude,
                    title: item.myListPublic[0].title,
                    contact: item.myListPublic[0].contact,
                    cost: item.myListPublic[0].cost,
                    handicap: item.myListPublic[0].handicap,
                    free: item.myListPublic[0].free,
                    type: item.myListPublic[0].type,
                    timeOpen: item.myListPublic[0].timeOpen,
                    timeClose: item.myListPublic[0].timeClose,
                    toiletpicture: item.myListPublic[0].toiletpicture,
                  });
                }
              };
              return (
                <TouchableOpacity key={index} onPress={onClick}>
                <ContentMyList
                  myListId={item._id}
                  _id={item.myListPublic[0]._id}
                  latitude={item.myListPublic[0].latitude}
                  longitude={item.myListPublic[0].longitude}
                  title={item.myListPublic[0].title}
                  contact={item.myListPublic[0].contact}
                  cost={item.myListPublic[0].cost}
                  handicap={item.myListPublic[0].handicap}
                  free={item.myListPublic[0].free}
                  type={item.myListPublic[0].type}
                  timeOpen={item.myListPublic[0].timeOpen}
                  timeClose={item.myListPublic[0].timeClose}
                  toiletpicture={item.myListPublic[0].toiletpicture}
                  onSelected={value => {
                    setModal(value);
                  }}
                  onClick = {value =>{
                    setMyListID(value);
                  }}
                />
                </TouchableOpacity>
              );
            }
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
        <RenderMyList></RenderMyList>

        <View style={{height: height * 0.08}} />
      </ScrollView>

      {/* Modal */}
      <Modal isVisible={modal}>
        <View style={styles.modalContainer}>
          <Image source={BrokenHeart} style={styles.imageBrokenHeart} />
          <View style={styles.detailPopupContainer}>
            <Text style={styles.titlePopup}>
              Do you want to delete this toilet ?
            </Text>
            <TouchableOpacity onPress={() => {deleteMyList(myListID),setModal(false)}} style={styles.btnYes}>
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
