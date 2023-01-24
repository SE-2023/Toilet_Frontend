import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {getLocation} from '../services/location';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
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
  // const mockUp = [
  //   {
  //     latitude: 0,
  //     longitude: 0,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421
  //   },
  //   {
  //     latitude: 13.775675675655555,
  //     longitude: 100.43290053771605,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421
  //   },
  //   {
  //     latitude: 13.8756756756788451,
  //     longitude: 100.43290053771605,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421
  //   }
  // ];
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
  // useEffect(() => {
  //   setToiletMarkers(mockUp);
  // }, []);
  // useEffect(() => {}, [toiletMarkers]);
  // console.log(toiletMarkers);
  useEffect(() => {
    const fetchData = async () => {
      const aom: any = await getLocation();
      console.log('value97', aom);
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
    // if (toiletMarkers.length === 0) {
    //   return <Text> no data </Text>;
    // }dasdas
    console.log('data 115', toiletMarkers);
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
        {/* {toiletMarkers?.length > 0
          ? toiletMarkers.map((item, index) => {
              console.log('item', item);
              return <Marker key={index} coordinate={item} />;
            })
          : null} */}

        {/* {toiletMarkers.length > 0 ? (
          <>
            <Marker
              key={0}
              coordinate={{
                latitude: -13.8756756756788451,
                longitude: 100.43290053771605
              }}
            />
            <Text>{toiletMarkers[0].latitude}</Text>
          </>
        ) : null} */}
        {/* <Marker key={0} coordinate={toiletMarkers[0]} /> */}
        <RenderLocation></RenderLocation>
        <Marker title="test" description="KMUTT" coordinate={pos} />
        {/* <Marker
          title='test'
          description='KMUTT'
          coordinate={{
            latitude: -27.8756756756788451,
            longitude: 100.43290053771605
          }}
        /> */}
      </MapView>
      {/* <View>
        <Button
          title="standard"
          onPress={() => setCurrentType(MapType.standard)}
        />
        <Button title="hybrid" onPress={() => setCurrentType(MapType.hybrid)} />
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
