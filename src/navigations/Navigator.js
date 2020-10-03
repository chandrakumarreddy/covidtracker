import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const stack = createStackNavigator();
const screenOptionStyles = {
  headerShown: false,
};

export default function HomeStackNavigator() {
  return (
    <stack.Navigator screenOptions={screenOptionStyles}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Details" component={Details} />
    </stack.Navigator>
  );
}
