import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';

const RewardLibrary = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.Text}>Your Points: </Text>
      </View>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Card style={styles.card} >
            <Text style={styles.Text}>Starbucks</Text>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.Text}>Tim Hortons</Text>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.Text}>Tim Hortons</Text>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.Text}>ABC Cafe</Text>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.Text}>Stores</Text>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.Text}>Stores</Text>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.Text}>Stores</Text>
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
  Text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20
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

});

export default RewardLibrary;