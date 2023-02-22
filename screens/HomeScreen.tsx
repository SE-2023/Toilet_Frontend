import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {getLocation} from '../services/location';
import {StackSimple, Star, Wheelchair, Clock} from 'phosphor-react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Buttonmap from '../components/Buttonmap';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileParamList} from '../stacks/ProfileStack';
import {BottomTabParamList} from '../stacks/BottomTabStack';
import toilet from '../assets/toilet.jpg';
import wc from '../assets/wc.png';
import Map from '../assets/Map.png';

/*const initialState = {
  latitude,
  longitud:null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}*/
async function requestPermissions() {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization('whenInUse');
    if (auth === 'granted') {
      // do something if granted...
    }
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
      // do something if granted...
    }
  }
}
interface Position {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
enum MapType {
  standard = 'standard',
  satellite = 'satellite',
  hybrid = 'hybrid',
  terrain = 'terrain',
}
// export type RootStackParamList = {
//   Home: undefined;
//   Profile: undefined;
// };

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParamList>>();
  const gotoDetails = () => {
    navigation.navigate('AddList');
  };
  const [pos, setPos] = useState<Position>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const onClick = () => {
    console.log('call api detail toilet');
  };
  const [currentType, setCurrentType] = useState(MapType.standard);
  const [aom, setaom] = useState(true);
  function callBoth() {
    if (aom === true) {
      setCurrentType(MapType.hybrid);
      setaom(false);
    } else {
      setCurrentType(MapType.standard);
      setaom(true);
    }
  }

  const [toiletMarkers, setToiletMarkers] = useState<Position[]>([]);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setPos({
          ...pos,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log('position', position);
      },
      err => {
        console.log('err', err);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const aom: any = await getLocation();
      // console.log('value97', aom);
      setToiletMarkers(aom.data);
      // setIsShowLocation((prev) => !prev);
      // setForceRefresh(Math.floor(Math.random() * 100));
    };
    fetchData();
    // const aom: any = await getLocation();
    // console.log('value97', aom);
    // setToiletMarkers(aom);
  }, []);
  const RenderLocation = () => {
    // console.log('data 115', toiletMarkers);
    return (
      <>
        {toiletMarkers.map((item: any, index) => {
          return (
            <Marker
              image={require('../assets/Map.png')}
              key={index}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}
              description={item._id}>
              <Callout tooltip onPress={onClick}>
                <View>
                  <View style={styles.bubble}>
                    <Image source={toilet} style={styles.imageToilet} />
                    <View style={styles.itemLeftTop}>
                      <View style={styles.tagFree}>
                        <Text style={styles.textFree}>฿ Free</Text>
                      </View>

                      <View style={styles.tagHandicap}>
                        <Wheelchair
                          size={10}
                          weight="fill"
                          color="#00845A"
                          style={{
                            marginRight: 2,
                            marginLeft: 6,
                          }}
                        />
                        <Text style={styles.textHandicap}>Handicap access</Text>
                      </View>

                      <View style={styles.tagType}>
                        {/* <Image source={wc} style={styles.iconType} /> */}
                        <Text style={styles.textType}>Public</Text>
                      </View>
                    </View>

                    <Text style={styles.placeName}>{item.title}</Text>

                    <View style={styles.itemBottom}>
                      <View style={styles.itemLeftBottom}>
                        <Clock
                          size={14}
                          weight="fill"
                          color="#31C596"
                          style={{
                            marginRight: 5,
                          }}
                        />
                        <Text style={styles.time}>00:00 - 00:00</Text>
                      </View>
                      <View style={styles.itemRightBottom}>
                        <Star
                          size={14}
                          weight="fill"
                          color="#FBD17B"
                          style={{
                            marginRight: 2,
                          }}
                        />
                        <Text style={styles.rate}>5.0</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </>
    );
  };

  if (toiletMarkers.length === 0) {
    return (
      <View>
        <Text> reloading </Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <MapView
        // onUserLocationChange={e => {
        //   console.log('locationChange', e.nativeEvent);
        // }}
        showsUserLocation={true}
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        region={pos}
        mapType={currentType}
        followsUserLocation={true}
        showsMyLocationButton={true}
        zoomControlEnabled={true}
        showsBuildings={true}
        toolbarEnabled={true}>
        <RenderLocation></RenderLocation>
        <Marker
          title="test"
          description="KMUTT"
          coordinate={pos}
          image={require('../assets/Map.png')}
        />
      </MapView>
      <View
        style={{
          position: 'absolute', //use absolute position to show button on top of the map
          top: 25, //for center align
          right: 25,
          alignSelf: 'flex-end', //for align to right
        }}>
        <SafeAreaView>
          <TouchableOpacity
            // colors={['#FAC353', '#FFA897']}
            style={styles.btnStackSimple_44}
            onPress={callBoth}>
            <StackSimple size={22} weight="fill" color="#2C2F4A" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  // Button StackSimple
  btnStackSimple_44: {
    width: 39,
    height: 39,
    borderRadius: 3,
    backgroundColor: '#fff',
    top: 35,
    left: 13.5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },

  // Callout
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#2C2F4A',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 273,
  },
  imageToilet: {
    width: 273,
    height: 80,
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
    marginBottom: 12,
    marginRight: 2,
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
    marginBottom: 12,
    marginRight: 2,
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
    marginBottom: 12,
    marginRight: 2,
    backgroundColor: '#CACCDA',
    borderRadius: 20,
  },
  iconType: {
    width: 10,
    height: 10,
    marginRight: 2,
    marginLeft: 6,
    opacity: 0.6,
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
    marginBottom: 5,
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

  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#2C2F4A',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#2C2F4A',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
});
