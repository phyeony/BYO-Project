import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const LocationPage = props => {
    return (<View style={styles.container}>
      <MapView style={styles.map} >
      </MapView>
      
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  map: {
    height: "70%"
  }

});
export default LocationPage;