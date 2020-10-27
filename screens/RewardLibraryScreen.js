import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const RewardLibrary = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.userPointText}>Your Points: 0</Text>
      </View>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Starbucks</Text>
            <Text style={styles.promotionDetailText}>50% off Grande Latte</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>2/10 remaining</Text>
              <Text style={styles.priceText}>8 Points</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Tim Hortons</Text>
            <Text style={styles.promotionDetailText}>50% off Grande Ice Coffee</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>3/10 remaining</Text>
              <Text style={styles.priceText}>9 Points</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>BYO coffee shop</Text>
            <Text style={styles.promotionDetailText}>Free Muffins</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>9/10 remaining</Text>
              <Text style={styles.priceText}>10 Points</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Surge Cafe</Text>
            <Text style={styles.promotionDetailText}>Free Cookies</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>1/10 remaining</Text>
              <Text style={styles.priceText}>8 Points</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Dummy Cafe</Text>
            <Text style={styles.promotionDetailText}>50% off Grande Latte</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>2/10 remaining</Text>
              <Text style={styles.priceText}>8 Points</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Starbucks</Text>
            <Text style={styles.promotionDetailText}>50% off Grande Latte</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>2/10 remaining</Text>
              <Text style={styles.priceText}>8 Points</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Starbucks</Text>
            <Text style={styles.promotionDetailText}>50% off Grande Latte</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>2/10 remaining</Text>
              <Text style={styles.priceText}>8 Points</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Starbucks</Text>
            <Text style={styles.promotionDetailText}>50% off Grande Latte</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Claim</Text>
              <Text style={styles.stockText}>2/10 remaining</Text>
              <Text style={styles.priceText}>8 Points</Text>
            </View>
          </Card>
          
        </View>
      </ScrollView>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  storeNameText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    
    flex: 1.3

  },
  promotionDetailText: {
    color: "black",
    fontSize: 15,
    
    marginBottom: 10,
    flex: 1
  },
  claimText: {
    color: Colors.primary,
    fontSize: 19,
    flex: 1,
    
  
   
  },
  stockText: {
    color: 'black',
    fontSize: 14,
    flex:3,
    marginTop: 3,
    
  },
  priceText: {
    color: 'black',
    fontSize: 24,
    height: 30,
    
    
  },
  claimContainer:{
    flexDirection: 'row',
    flex: 1,
    alignItems: "flex-end"
  },
  card: {
    height: 125,
    marginTop: 10,
    marginBottom: 10,
    width: "90%",
    borderRadius: 20,
  },
  cardContainer: {
    alignItems: "center",

  },
  textView: {
    width: "100%",
    height: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
  },
  userPointText: {

    fontSize: 20,
  }

});

export default RewardLibrary;