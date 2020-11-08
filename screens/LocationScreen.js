import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../constants/colors';

import StoresList from '../components/StoresList';

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
        <StoresList />
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
    flex: 1
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