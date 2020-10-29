import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../constants/colors';
import Card from '../components/Card';

const LocationPage = props => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 49.2069,
          longitude: -122.9111,
          latitudeDelta: 0.0145,
          longitudeDelta: 0.0015
        }}
      >

      </MapView>
      <ScrollView>
        <View style={styles.cardContainer}>

          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Starbucks</Text>
            <Text style={styles.promotionDetailText}>1234 Abc Street</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Open</Text>
              <Text style={styles.stockText}>(604)-123-4567</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Surge Cafe</Text>
            <Text style={styles.promotionDetailText}>1234 Abc Street</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.claimText}>Open</Text>
              <Text style={styles.stockText}>(604)-123-4567</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>BYO store</Text>
            <Text style={styles.promotionDetailText}>1234 Abc Street</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.closedText}>Closed</Text>
              <Text style={styles.stockText}>Opens at 9am Mon | (604)-123-4567</Text>
            </View>
          </Card>
          <Card style={styles.card} >
            <Text style={styles.storeNameText}>Dummy Store</Text>
            <Text style={styles.promotionDetailText}>1234 Abc Street</Text>
            <View style={styles.claimContainer}>
              <Text style={styles.closedText}>Closed</Text>
              <Text style={styles.stockText}>Opens at 9am Mon | (604)-123-4567</Text>
            </View>
          </Card>
         
         
         
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    height: "50%"
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
  closedText: {
    color: 'red',
    fontSize: 19,
    flex:1
  },
  stockText: {
    color: 'black',
    fontSize: 14,
    flex: 3,
    marginTop: 3,

  },
  priceText: {
    color: 'black',
    fontSize: 24,
    height: 30,


  },
  claimContainer: {
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
});
export default LocationPage;