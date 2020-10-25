import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import HomePageScreen from './screens/HomePageScreen';
import RewardLibraryScreen from './screens/RewardLibraryScreen';
import LocationScreen from './screens/LocationScreen';
import SettingScreen from './screens/SettingScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
  


createBottomTabs = () => {
  return <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name= "Rewards" component={RewardLibraryScreen} />
    <MaterialBottomTabs.Screen name= "Home" component={HomePageScreen} />
    <MaterialBottomTabs.Screen name= "Location" component={LocationScreen} /> 
    <MaterialBottomTabs.Screen name= "Setting" component={SettingScreen} />
  </MaterialBottomTabs.Navigator>
}
export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Bottom Tabs"  children={createBottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
