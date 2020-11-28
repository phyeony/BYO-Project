import 'react-native-gesture-handler';

import React, { createContext } from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage'

import LoginScreen from './screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabs, getHeaderTitle } from './navigation/Navigator';

import { firebaseInstance } from "./Firebase";
import "firebase/firestore";



const MainStack = createStackNavigator();

console.log(firebaseInstance);
const App = () => {

 
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

export default App;