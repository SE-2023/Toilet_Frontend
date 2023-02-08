import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthContext from '../context/AuthContext';
import RequireLogin from '../components/RequireLogin';
import AddToilet from '../screens/AddToilet';
import AddT2 from '../screens/AddT2';
export type AddToiletParamList = {
  AddToilet: undefined;
  AddT2: {
    _id: string;
    latitude: number;
    longitude: number;
  };
};
const AddToiletStack = () => {
  const Stack = createNativeStackNavigator<AddToiletParamList>();
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <RequireLogin>
      <Stack.Navigator
        initialRouteName="AddToilet"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AddToilet" component={AddToilet} />
        <Stack.Screen name="AddT2" component={AddT2} />
      </Stack.Navigator>
    </RequireLogin>
  );
};

export default AddToiletStack;

const styles = StyleSheet.create({});
