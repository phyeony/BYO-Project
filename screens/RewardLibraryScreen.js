import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RewardsList from '../components/RewardsList';

const RewardLibrary = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={{ fontSize:20 }}>Your Points: 0</Text>
      </View>
      <ScrollView>
        <RewardsList/>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textView: {
    width: "100%",
    height: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
  },

});

export default RewardLibrary;