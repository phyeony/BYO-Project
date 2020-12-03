import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Rewards from '../components/Rewards';
import RewardsList from '../components/RewardsList';
import {dbService} from '../Firebase';

const initialCount = () =>{
  console.log("num function run");
  return 5;
}
const RewardLibrary = props => {
  const [userPoints, setUserPoints] = useState(()=>initialCount());
  const [rewards, setRewards] = useState([]);
  const localRewards = [];
  

  const decrementCount = () => {
    setUserPoints(prevCount => prevCount-1)
  }
  const incrementCount = () => {
    setUserPoints(prevCount => prevCount+1)
  }

  useEffect(() =>{
    getRewards();
  },[]);
  
  const getRewards = () => {
    const rewardsCollection = dbService
      .collection('rewards')
      .where('is_claimed','==',false)
      .where('is_redeemed','==',false)
      .orderBy('price','asc')
      .orderBy('remaining_stock','desc')    
      .get()
      .then((querySnapshot) => {
        for (let i = 0; i< querySnapshot.docs.length; i++) {
          console.log("Doc data: ", querySnapshot.docs[i].data());
          localRewards.push(querySnapshot.docs[i].data())  
        }
        console.log("local store data: ", localRewards);  
        setRewards(localRewards); 
      })

  }

  

  
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={{ fontSize:20 }}>Your Points: {userPoints}</Text>
      </View>
      {/* <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <Button style={{}} onPress={incrementCount}>+</Button>
        <Button onPress={decrementCount}>-</Button>
      </View> */}
      <ScrollView>
        <RewardsList rewards={rewards}/>
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