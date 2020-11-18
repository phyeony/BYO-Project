import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomePageScreen from '../screens/HomePageScreen';
import RewardLibraryScreen from '../screens/RewardLibraryScreen';
import LocationScreen from '../screens/LocationScreen';
import SettingScreen from '../screens/SettingScreen';
import Colors from '../constants/colors';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';





//TODO: Create a Stack navigator for each tab screens.
const HomeStackScreen = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomePageScreen} />
        </HomeStack.Navigator>
    );
}
const RewardsStackScreen = () => {
    const RewardsStack = createStackNavigator();
    return (
        <RewardsStack.Navigator>
            <RewardsStack.Screen name="Rewards" component={RewardLibraryScreen} />
        </RewardsStack.Navigator>
    );
}
const SettingStackScreen = () => {
    const SettingStack = createStackNavigator();
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name="Setting" component={SettingScreen} />
        </SettingStack.Navigator>
    );
}

//I think we need to change this
export function getHeaderTitle(route) {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'Home'

    switch (routeName) {
        case 'Home':
            return 'Welcome!'
        case 'Setting':
            return 'Setting'
        case 'Location':
            return 'Location'
        case 'Rewards':
            return 'Rewards'
    }
}

export const createBottomTabs = () => {
    const Tabs = createMaterialBottomTabNavigator();
    return <Tabs.Navigator
        initialRouteName="Home"
        activeColor={Colors.primary}
        inactiveColor='grey'
        barStyle={{ backgroundColor: 'white' }}
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

        {/* <Tabs.Screen
            name="Add Documents"
            component={AddDocuments}
            options={{
                tabBarLabel: 'Add Documents',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-settings" size={26} color={color} />
                ),
            }}
        /> */}

    </Tabs.Navigator >
}