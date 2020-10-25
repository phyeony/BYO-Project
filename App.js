import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import HomePageScreen from './screens/HomePageScreen';
import RewardLibraryScreen from './screens/RewardLibraryScreen';
import LocationScreen from './screens/LocationScreen';
import SettingScreen from './screens/SettingScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from './screens/HomePageScreen';



const MainStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const RewardsStack = createStackNavigator();
const SettingStack = createStackNavigator();

//TODO: Create a Stack navigator for each tab screens.
const HomeStackScreen = () => {
  return(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomePageScreen} />
  </HomeStack.Navigator>
  );
}
const RewardsStackScreen = () => {
  return(
  <RewardsStack.Navigator>
    <RewardsStack.Screen name="Rewards" component={RewardLibraryScreen} />
  </RewardsStack.Navigator>
  );
}
const SettingStackScreen = () => {
  return(
  <SettingStack.Navigator>
    <SettingStack.Screen name="Setting" component={SettingScreen} />
  </SettingStack.Navigator>
  );
}

//I think we need to change this
function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home'

  switch (routeName) {
    case 'Home':
      return 'Home'
    case 'Setting':
      return 'Setting'
    case 'Location':
      return 'Location'
    case 'Rewards':
      return 'Rewards'
  }
}

const createBottomTabs = () => {
  return <Tabs.Navigator
    initialRouteName="Home"
    activeColor= {Colors.primary}
    inactiveColor= 'grey'
    barStyle= {{backgroundColor: 'white'}}
  >
    <Tabs.Screen
      name="Rewards"
      component={RewardsStackScreen}
      options={{
        tabBarLabel: 'Rewards',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="star" size={26} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Location"
      component={LocationScreen}
      options={{
        tabBarLabel: 'Location',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="location-on" size={26} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Setting"
      component={SettingStackScreen}
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-settings" size={26} color={color} />
        ),
      }}
    />
  </Tabs.Navigator >
}
export default function App() {

  return (
    //TODO: What's the diff between children and component?
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Bottom Tabs"
          component={createBottomTabs}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route)
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
