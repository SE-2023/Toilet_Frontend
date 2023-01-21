import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import './config/axiosconfig';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './screens/Profile';
import Tabbars from './Components/tabbar';
import Login from './screens/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// export type RootStackParamList = {
//   Home: undefined;
//   Profile: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createBottomTabNavigator<RootStackParamList>();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen name="Profile" component={Profile} options={{
    //         headerShown: false,
    //       }}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Tabbars></Tabbars>
  );
};

export default App;
const styles = StyleSheet.create({});
