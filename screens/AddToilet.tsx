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
import {AddToiletParamList} from '../stacks/AddToiletStack';
import {getProfile} from '../services/auth';
export interface IProfile {
  _id: string;
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
const AddToilet = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AddToiletParamList>>();

  const [profile, setProfile] = React.useState<IProfile>({
    _id: '',
  });
  const getUserProfile = async () => {
    const {data} = await getProfile();
    setProfile(data);
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  const gotoAddtoilet = () => {
    navigation.navigate('AddDetailToilet2', {
      _id: profile._id,
      latitude: pos.latitude,
      longitude: pos.longitude,
    });
  };

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
  const selectLocation = () => {
    console.log('selectLocation');
    const location = {
      latitude: pos.latitude,
      longitude: pos.longitude,
    };
    console.log(location);
    // navigation.navigate('AddT2');
  };
  // const [toiletMarkers, setToiletMarkers] = useState<Position[]>([]);
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const aom: any = await getLocation();
  //     setToiletMarkers(aom.data);
  //   };
  //   fetchData();
  // }, []);
  // const RenderLocation = () => {
  //   return (
  //     <>
  //       {toiletMarkers.map((item: any, index) => {
  //         return (
  //           <Marker
  //             key={index}
  //             coordinate={{
  //               latitude: item.latitude,
  //               longitude: item.longitude,
  //             }}
  //             title={item.title}></Marker>
  //         );
  //       })}
  //     </>
  //   );
  // };

  // if (toiletMarkers.length === 0) {
  //   return (
  //     <View>
  //       <Text> reloading </Text>
  //     </View>
  //   );
  // }
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
        {/* <RenderLocation></RenderLocation> */}
        <Marker title="test" description={profile._id} coordinate={pos} />
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
      <Button title="Submit" onPress={gotoAddtoilet} />
    </View>
  );
};

export default AddToilet;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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
});
