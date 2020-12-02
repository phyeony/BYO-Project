import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Rewards from '../components/Rewards';
import RewardsList from '../components/RewardsList';
import {dbService} from '../Firebase';

const RewardLibrary = props => {
  const [rewards, setRewards] = useState([]);
  const localClaimedRewards = [];
  

  useEffect(() =>{
    getClaimedRewards();
  },[]);
  
  const getClaimedRewards = () => {
    const claimedRewards = dbService
      .collection('rewards')
      .where('is_claimed','==',true)
      .get()
      .then((querySnapshot) => {
        for (let i = 0; i< querySnapshot.docs.length; i++) {
          console.log("Doc data: ", querySnapshot.docs[i].data());
          localClaimedRewards.push(querySnapshot.docs[i].data())  
        }
        console.log("local store data: ", localClaimedRewards);  
        setRewards(localClaimedRewards); 
      })

  }

  

  
  return (
    <View style={styles.container}>
    
      <ScrollView>
        <RewardsList rewards={rewards} />
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