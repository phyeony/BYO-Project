import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Firebase from '../Firebase';
import mainContext from '../context/mainContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/colors';

const SettingPage = props => {

  const { signOutUser } = useContext(mainContext);
  
  return <View>
    <TouchableOpacity
      style={styles.SignOutBtn}
      onPress={() => signOutUser()}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
  </View>

}
const styles = StyleSheet.create({
  SignOutBtn: {
    width: "40%",
    left: '30%',
    backgroundColor: Colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },

});

export default SettingPage;