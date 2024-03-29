import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyToilet from '../screens/MyToilet';
import UpdateProfile from '../screens/UpdateProfile';
import Profile from '../screens/Profile';
import AuthContext from '../context/AuthContext';
import RequireLogin from '../components/RequireLogin';
import UpdateToilet from '../screens/UpdateToilet';
export type ProfileParamList = {
  Profile: undefined;
  UpdateProfile: {
    _id: string;
    firstname: string;
    // setFirstname: (value: string) => void;
    lastname: string;
    // setLastname: (value: string) => void;
    phone: string;
    // setPhone: (value: string) => void;
    email: string;
    // setEmail: (value: string) => void;
    // onSubmit: () => void;
    profile_picture: string;
  };
  MyToilet: {
    CreateBy: string;
  };
  UpdateToilet: {
    _id: string;
    title: string;
    contact: string;
    cost: string;
    handicap: boolean;
    free: boolean;
    type: string;
    timeOpen: string;
    timeClose: string;
    toiletpicture: string;
  };
};
const ProfileStack = () => {
  const Stack = createNativeStackNavigator<ProfileParamList>();
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <RequireLogin>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
          // navigationBarHidden: true,
        }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="MyToilet" component={MyToilet} />
        <Stack.Screen name="UpdateToilet" component={UpdateToilet} />
      </Stack.Navigator>
    </RequireLogin>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
