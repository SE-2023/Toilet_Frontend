import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {getLocation} from '../services/location';
import {StackSimple} from 'phosphor-react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Buttonmap from '../components/Buttonmap';
import {SafeAreaView} from 'react-native-safe-area-context';
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
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [pos, setPos] = useState<Position>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
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
              key={index}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}></Marker>
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
        <Marker title="test" description="KMUTT" coordinate={pos} />
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
  btnStackSimple_44: {
    width: 39,
    height: 39,
    borderRadius: 3,
    backgroundColor: '#F4F6FD',
    top: 35,
    left: 13.5,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  },
});
