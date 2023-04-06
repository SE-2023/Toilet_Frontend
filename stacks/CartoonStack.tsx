import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Cartoon from '../screens/Cartoon';
import Toon_1 from '../screens/Toon_1';
import Toon_2 from '../screens/Toon_2';
import Toon_3 from '../screens/Toon_3';
import Toon_4 from '../screens/Toon_4';
import Toon_5 from '../screens/Toon_5';
import Toon_6 from '../screens/Toon_6';
import Toon_7 from '../screens/Toon_7';
import Toon_8 from '../screens/Toon_8';
import Toon_9 from '../screens/Toon_9';

export type CartoonStackList = {
  Cartoon: undefined;
  Toon_1: undefined;
  Toon_2: undefined;
  Toon_3: undefined;
  Toon_4: undefined;
  Toon_5: undefined;
  Toon_6: undefined;
  Toon_7: undefined;
  Toon_8: undefined;
  Toon_9: undefined;
};

const CartoonStack = () => {
  const Stack = createNativeStackNavigator<CartoonStackList>();

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Cartoon"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Cartoon" component={Cartoon} />
      <Stack.Screen name="Toon_1" component={Toon_1} />
      <Stack.Screen name="Toon_2" component={Toon_2} />
      <Stack.Screen name="Toon_3" component={Toon_3} />
      <Stack.Screen name="Toon_4" component={Toon_4} />
      <Stack.Screen name="Toon_5" component={Toon_5} />
      <Stack.Screen name="Toon_6" component={Toon_6} />
      <Stack.Screen name="Toon_7" component={Toon_7} />
      <Stack.Screen name="Toon_8" component={Toon_8} />
      <Stack.Screen name="Toon_9" component={Toon_9} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default CartoonStack;

const styles = StyleSheet.create({});
