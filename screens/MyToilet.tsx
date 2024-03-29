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
import {CaretLeft} from 'phosphor-react-native';
import ContentMyToilet from '../components/ContentMyToilet';
import {HomeParamList} from '../stacks/HomeStack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileParamList} from '../stacks/ProfileStack';
import {AddToiletParamList} from '../stacks/AddToiletStack';
import {deleteMyToilet, getMytoilet} from '../services/toilet';
import NotToilet from '../components/NotToilet';
import Modal from 'react-native-modal';
import Bin from '../assets/Bin.png';

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
  const [modal, setModal] = useState(false);
  const [toiletID, settoiletID] = useState('');
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
  useEffect(() => {
    fetchData();
  }, [modal]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);
  ///Update
  const RenderMytoilet = (): JSX.Element | null => {
    const navigation =
      useNavigation<NativeStackNavigationProp<HomeParamList>>();
    if (checkData === 'success') {
      return (
        <>
          {myList.map((item: any, index) => {
            const onClick = () => {
              console.log('call api detail toilet', item);
              if (item) {
                navigation.navigate('DetailToilet', {
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
                  toiletpicture: item.toiletpicture,
                });
              }
            };
            return (
              <TouchableOpacity key={index} onPress={onClick}>
                <ContentMyToilet
                  _id={item._id}
                  latitude={item.latitude}
                  longitude={item.longitude}
                  title={item.title}
                  contact={item.contact}
                  cost={item.cost}
                  handicap={item.handicap}
                  free={item.free}
                  type={item.type}
                  timeOpen={item.timeOpen}
                  timeClose={item.timeClose}
                  toiletpicture={item.toiletpicture}
                  onSelected={value => {
                    setModal(value);
                  }}
                  onSelected2={value => {
                    settoiletID(value);
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </>
      );
    } else {
      return (
        <View style={styles.notToilet}>
          <NotToilet />
        </View>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderMytoilet></RenderMytoilet>

        <View style={{height: height * 0.08}} />
      </ScrollView>

      {/* Modal */}
      <Modal isVisible={modal}>
        <View style={styles.modalContainer}>
          <Image source={Bin} style={styles.imageBin} />
          <View style={styles.detailPopupContainer}>
            <Text style={styles.titlePopup}>
              Do you want to delete this toilet ?
            </Text>
            <TouchableOpacity
              style={styles.btnYes}
              onPress={() => {
                deleteMyToilet(toiletID), setModal(false);
              }}>
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

export default MyToilet;

const styles = StyleSheet.create({
  notToilet: {
    marginTop: '55%',
  },
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

  // Modal
  modalContainer: {
    backgroundColor: '#F4F6FD',
    borderRadius: 8,
    marginHorizontal: 40,
  },
  detailPopupContainer: {
    paddingHorizontal: 20,
  },
  imageBin: {
    width: 130,
    height: 165,
    marginTop: -92,
    alignSelf: 'center',
  },
  titlePopup: {
    fontSize: 22,
    fontFamily: 'Fredoka-Medium',
    color: '#2C2F4A',
    marginTop: 15,
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
