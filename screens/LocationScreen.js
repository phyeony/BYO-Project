import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const LocationPage = props => {
  return (<View style={styles.container}>
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 49.2069,
        longitude:  -122.9111,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.015
      }}
    >

    </MapView>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    height: "70%"
  }

});
export default LocationPage;