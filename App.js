import 'react-native-gesture-handler';

import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ActivityIndicator } from 'react-native-paper'

import LoginScreen from './screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabs, getHeaderTitle } from './navigation/Navigator';

import { Firebase } from "./Firebase";


import mainContext from './context/mainContext';

const MainStack = createStackNavigator();

console.log(Firebase);
const App = () => {

  const [userLogged, setUserLogged] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const authListener = Firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
    });
    return authListener;
  }, []);

  const doLogin = async (email, password) => {
    setIsLoading(true);
    //console.log('login' + JSON.stringify(userProfile));
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  const doSignup = async (email, password) => {
    setIsLoading(true);
    //console.log('login' + JSON.stringify(userProfile));
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      signOutUser: () => Firebase.auth().signOut(),
      handleLogin: (email, password) => {
        doLogin(email, password);
      },
      handleSignup: (email, password) => {
        doSignup(email, password);
      },
    }),
    []
  );


  if (isLoading) {
    // Checking if already logged in
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    //TODO: What's the diff between children and component?
    <mainContext.Provider value={mainC}>
      <NavigationContainer>
        <MainStack.Navigator>
          {userLogged == false ? (
            <MainStack.Screen name="Login" component={LoginScreen} />
          ) : (
              <MainStack.Screen
                name="Bottom Tabs"
                component={createBottomTabs}
                options={({ route }) => ({
                  headerTitle: getHeaderTitle(route)
                })}
              />
            )}
        </MainStack.Navigator>
      </NavigationContainer>
    </mainContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

export default App;