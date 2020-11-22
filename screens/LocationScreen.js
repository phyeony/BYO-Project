import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../constants/colors';

import StoresList from '../components/StoresList';
import * as Location from 'expo-location';

import { GeoFirestore } from 'geofirestore';


const LocationPage = () => {

  const [mapRegion, setMapRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    else if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
      console.log(JSON.stringify(location));
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0145,
        longitudeDelta: 0.0015
      })

    }
  }

  const handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    setMapRegion(mapRegion);
  };

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  // latitude: 49.2069,
  // longitude: -122.9111,
  // latitudeDelta: 0.0145,
  // longitudeDelta: 0.0015
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={mapRegion}
   
      >
        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude,
          };

          const metadata = `Status: ${marker.statusValue}`;

          return (
            <Marker
              key={index}
              coordinate={coords}
              title={marker.stationName}
              description={metadata}
            />
          );
        })}

      </MapView>
      <FlatList>
        <StoresList />
      </FlatList>

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