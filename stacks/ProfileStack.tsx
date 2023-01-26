import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UpdateProfile from '../screens/UpdateProfile';
export type ProfileParamList = {
  UpdateProfile: undefined;
};
const ProfileStack = () => {
  const Stack = createNativeStackNavigator<ProfileParamList>();
  return (
    <Stack.Navigator
      initialRouteName="UpdateProfile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
