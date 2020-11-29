import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../constants/colors';

import StoresList from '../components/StoresList';
import * as Location from 'expo-location';

import { GeoFireStore, firebaseInstance } from '../Firebase'
import { LogBox } from 'react-native';
import _ from 'lodash';
import { ScrollView } from 'react-native-gesture-handler';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};



const LocationPage = () => {

  const [stores, setStores] = useState([]);
  const [mapRegion, setMapRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const localStoreData = [];
 

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    else if (status === 'granted') {

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log("location: ", location);
        //console.log(JSON.stringify(location));
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0145,
          longitudeDelta: 0.0015
        })
        getNearByStores(location);
      } catch (err) {
        console.log("error: ",err);
      }  
    }
  }

  const getNearByStores = (location) => {
    const geoCollection = GeoFireStore.collection('stores');
    console.log("location: ", location);


    geoCollection
      .near({
        center: new firebaseInstance.firestore.GeoPoint(
          location.coords.latitude,
          location.coords.longitude
        ),
        radius: 200
      })
      .limit(15)
      .get()
      .then((querySnapshot) => {
   
        console.log("docs", querySnapshot.docs);
      
        
        console.log(stores);
        for (let i = querySnapshot.docs.length-1; i >=0 ; i--) {
          console.log("Doc id: ", querySnapshot.docs[i].id);
          console.log("Doc data: ", querySnapshot.docs[i].data());
          localStoreData.push(querySnapshot.docs[i].data())  
        }
        console.log("local store data: ", localStoreData);
        // setStores([...stores,...localStoreData]);
        setStores(localStoreData);
        setIsLoading(false);
      });
      

  }


  const handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    setMapRegion(mapRegion);
  };

  return (
   
    <View style={styles.container}>
   
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={mapRegion}
      >
        {isLoading? null :stores.map((store,index) => {
          const coords = {
            latitude: store.coordinates.latitude,
            longitude: store.coordinates.longitude,
          };

          return (
            <Marker
              key={index}
              coordinate={coords}
              title={store.name}
              description={store.phone_number}
            />
          );
        })}

    

      </MapView>
      <ScrollView>
        {console.log("stores data in ScrollView2 :",stores)}
        <StoresList stores={stores} />
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