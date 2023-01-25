import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import BottomTabStack, {BottomTabParamList} from './BottomTabStack';
import AuthStack from './AuthStack';
import AuthContext from '../context/AuthContext';
import Login from '../screens/Login';

export type RootStackList = {
  AuthStack: undefined;
  MainStack: NavigatorScreenParams<BottomTabParamList>;
  Login: undefined;
};

const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackList>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{isLoggedIn: isLoggedIn, setLoggedIn: setIsLoggedIn}}>
      <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{
          headerShown: false,
        }}>
        {isLoggedIn ? (
          <Stack.Screen name="MainStack" component={BottomTabStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
        {/* <Stack.Screen name="Login" component={Login} /> */}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
