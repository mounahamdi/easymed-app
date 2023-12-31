import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import DoctorDetails from './DoctorDetails';



const Tab = createBottomTabNavigator();

export default function DrawerScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={DoctorDetails} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}