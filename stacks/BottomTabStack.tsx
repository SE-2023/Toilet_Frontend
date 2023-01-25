import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import AddToilet from '../screens/AddToilet';
import Cartoon from '../screens/Cartoon';
import AddList from '../screens/AddList';
import Login from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  AddToilet: undefined;
  Cartoon: undefined;
  AddList: undefined;
};
export type NaviTabParamList = {
  Login: undefined;
};

const BottomTabStack = () => {
  const Stack = createBottomTabNavigator<BottomTabParamList>();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          // tabBarStyle: {
          //   height: 65,
          //   paddingBottom: 5,
          // },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            {
              // tabBarLabel: 'หน้าแรก',
              // tabBarLabelStyle: {
              //   fontSize: 15,
              // },
            }
          }
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={
            {
              // tabBarLabel: 'หน้าแรก',
              // tabBarLabelStyle: {
              //   fontSize: 15,
              // },
            }
          }
        />
        <Stack.Screen
          name="AddToilet"
          component={AddToilet}
          options={
            {
              // tabBarLabel: 'หน้าแรก',
              // tabBarLabelStyle: {
              //   fontSize: 15,
              // },
            }
          }
        />
        <Stack.Screen
          name="Cartoon"
          component={Cartoon}
          options={
            {
              // tabBarLabel: 'หน้าแรก',
              // tabBarLabelStyle: {
              //   fontSize: 15,
              // },
            }
          }
        />
        <Stack.Screen
          name="AddList"
          component={AddList}
          options={
            {
              // tabBarLabel: 'หน้าแรก',
              // tabBarLabelStyle: {
              //   fontSize: 15,
              // },
            }
          }
        />
      </Stack.Navigator>
    </>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({});
