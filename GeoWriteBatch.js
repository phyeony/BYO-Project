import {GeoFireStore} from './Firebase';

//Create a GeoCollection reference
const geoCollection = GeoFireStore.collection('stores');

//Create a GeoWriteBatch reference
const geoBatch = GeoFireStore.batch();

// //Set the value of Starbucks 1 location East Columbia
// var Store1 = geoCollection.doc("store1");
// geoBatch.set(Store1, {
//   name: 'Starbucks',
//   is_open: 'Open',
//   phone_number: '+16045227573',
//   large_points: '10',
//   medium_points: '7.5',
//   small_points: '5',
//   saving_per_cup:'5',
//   coordinates: new firebase.firestore.GeoPoint(49.2287706450051, -122.89301690047998)
// })

// //Set the value of Starbucks 2 location Granville
// var Store2 = geoCollection.doc("store2");
// geoBatch.set(Store2, {
//   name: 'Starbucks',
//   is_open: 'Closed',
//   phone_number: '+16046339801',
//   large_points: '15',
//   medium_points: '9.5',
//   small_points: '6',
//   saving_per_cup:'5',
//   coordinates: new firebase.firestore.GeoPoint(49.282215556250634, -123.11842031582269)
// })
// //Set the value of Starbucks 3 location 610 6th street
// var Store3 = geoCollection.doc("store3");
// geoBatch.set(Store3, {
//   name: 'Starbucks',
//   is_open: 'Open',
//   phone_number: '+16045205937',
//   large_points: '8',
//   medium_points: '5.5',
//   small_points: '3',
//   saving_per_cup:'3',
//   coordinates: new firebase.firestore.GeoPoint(49.21210556799551, -122.92288861291478)
// })
// //Set the value of Starbucks 4 location
// var Store4 = geoCollection.doc("store4");
// geoBatch.set(Store4, {
//   name: 'Starbucks',
//   is_open: 'Closed',
//   phone_number: '+16044155336',
//   large_points: '10',
//   medium_points: '7.5',
//   small_points: '5',
//   saving_per_cup:'5',
//   coordinates: new firebase.firestore.GeoPoint(49.251113141456635, -122.89606875070608)
// })

var store5 = geoCollection.doc("store5");
geoBatch.set(store5, {
  name: 'Standing Egg Coffee',
  is_open: 'Closed',
  phone_number: '+16044213900',
  large_points: '8',
  medium_points: '5.5',
  small_points: '3',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.24445579966531, -122.89476633116996)
})


var store6 = geoCollection.doc("store6");
geoBatch.set(store6, {
  name: 'La Forêt',
  is_open: 'Closed',
  phone_number: '+16044288155',
  large_points: '8',
  medium_points: '4',
  small_points: '2',
  saving_per_cup:'2.5',
  coordinates: new firebase.firestore.GeoPoint(49.22157215672664, -122.99546073302551)
})

var store7 = geoCollection.doc("store7");
geoBatch.set(store7, {
  name: 'Tim Hortons',
  is_open: 'Open',
  phone_number: '+16044202793',
  large_points: '15',
  medium_points: '7.5',
  small_points: '5',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.24888501449741, -122.8935398811502)
})


var store8 = geoCollection.doc("store8");
geoBatch.set(store8, {
  name: 'Café Blanc',
  is_open: 'Open',
  phone_number: '+17782517424',
  large_points: '8',
  medium_points: '4',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.244823098822025, -122.89175543048633)
})

//
var store9 = geoCollection.doc("store9");
geoBatch.set(store9, {
  name: 'Juillet cafe',
  is_open: 'Open',
  phone_number: '+17783793312',
  large_points: '8',
  medium_points: '4',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.24530062799282, -122.89313364295569)
})

var store10 = geoCollection.doc("store10");
geoBatch.set(store10, {
  name: 'Tim Hortons',
  is_open: 'Open',
  phone_number: '+16045275497',
  large_points: '12',
  medium_points: '5',
  small_points: '2',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.20362128180324, -122.9126946685596)
})

var store11 = geoCollection.doc("store11");
geoBatch.set(store11, {
  name: 'Chatime New West',
  is_open: 'Open',
  phone_number: '+17783979939',
  large_points: '8',
  medium_points: '4',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.20470079909681, -122.9089610335089)
})
var store12 = geoCollection.doc("store12");
geoBatch.set(store12, {
  name: 'Starbucks',
  is_open: 'Closed',
  phone_number: '+16045277978',
  large_points: '12',
  medium_points: '6',
  small_points: '3',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.203469691829696, -122.90811359869032)
})
var store13 = geoCollection.doc("store13");
geoBatch.set(store13, {
  name: 'Tim Hortons',
  is_open: 'Open',
  phone_number: '+16045256682',
  large_points: '10',
  medium_points: '4',
  small_points: '2',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.21142182052091, -122.92323978698984)
})
var store14 = geoCollection.doc("store14");
geoBatch.set(store14, {
  name: 'Starbucks',
  is_open: 'Open',
  phone_number: '+16045206011',
  large_points: '10',
  medium_points: '5',
  small_points: '2',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.21276459759532, -122.9194274439255)
})
var store15 = geoCollection.doc("store15");
geoBatch.set(store15, {
  name: 'Dakasi Tea',
  is_open: 'Open',
  phone_number: '+16045227566',
  large_points: '8',
  medium_points: '4',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.2107484488616, -122.91684165590712)
})
var store16 = geoCollection.doc("store16");
geoBatch.set(store16, {
  name: 'Craft Cafe',
  is_open: 'Open',
  phone_number: '+17786558305',
  large_points: '8',
  medium_points: '4',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.19974756145155, -122.91340920307026)
})
var store17 = geoCollection.doc("store17");
geoBatch.set(store17, {
  name: 'Tim Hortons',
  is_open: 'Open',
  phone_number: '+16045822799',
  large_points: '9',
  medium_points: '5',
  small_points: '2',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.19289314009838, -122.88897981173757)
})
var store18 = geoCollection.doc("store18");
geoBatch.set(store18, {
  name: 'Starbucks',
  is_open: 'Open',
  phone_number: '+17785589253',
  large_points: '5',
  medium_points: '2',
  small_points: '1',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.192059579694586, -122.89071723793735)
})
var store19 = geoCollection.doc("store19");
geoBatch.set(store19, {
  name: 'Basak Cafe',
  is_open: 'Open',
  phone_number: '+16045581631',
  large_points: '3',
  medium_points: '2',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.243391987877224, -122.89300391901047)
})
var store20 = geoCollection.doc("store20");
geoBatch.set(store20, {
  name: 'Tim Hortons',
  is_open: 'Open',
  phone_number: '+16045238815',
  large_points: '5',
  medium_points: '2.5',
  small_points: '1',
  saving_per_cup:'5',
  coordinates: new firebase.firestore.GeoPoint(49.225927101082526, -122.89152914886935)
})
var store21 = geoCollection.doc("store21");
geoBatch.set(store21, {
  name: 'Homespun Cafe',
  is_open: 'Open',
  phone_number: '+17788651349',
  large_points: '8',
  medium_points: '4',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.225927101082526, -122.89323503384938)
})
var store22 = geoCollection.doc("store22");
geoBatch.set(store22, {
  name: 'Starbucks',
  is_open: 'Open',
  phone_number: '+16045227573',
  large_points: '8',
  medium_points: '4',
  small_points: '1',
  saving_per_cup:'2',
  coordinates: new firebase.firestore.GeoPoint(49.22887160702772, -122.89298787386282)
})
// var store23 = geoCollection.doc("store23");
// geoBatch.set(store23, {
//   name: 'Café Blanc',
//   is_open: 'Open',
//   phone_number: '+17782517424',
//   large_points: '8',
//   medium_points: '4',
//   small_points: '1',
//   saving_per_cup:'2',
//   coordinates: new firebase.firestore.GeoPoint(49.244823098822025, -122.89175543048633)
// })
// var store24 = geoCollection.doc("store24");
// geoBatch.set(store24, {
//   name: 'Café Blanc',
//   is_open: 'Open',
//   phone_number: '+17782517424',
//   large_points: '8',
//   medium_points: '4',
//   small_points: '1',
//   saving_per_cup:'2',
//   coordinates: new firebase.firestore.GeoPoint(49.244823098822025, -122.89175543048633)
// })
// var store25 = geoCollection.doc("store25");
// geoBatch.set(store25, {
//   name: 'Café Blanc',
//   is_open: 'Open',
//   phone_number: '+17782517424',
//   large_points: '8',
//   medium_points: '4',
//   small_points: '1',
//   saving_per_cup:'2',
//   coordinates: new firebase.firestore.GeoPoint(49.244823098822025, -122.89175543048633)
// })
// var store26 = geoCollection.doc("store26");
// geoBatch.set(store26, {
//   name: 'Café Blanc',
//   is_open: 'Open',
//   phone_number: '+17782517424',
//   large_points: '8',
//   medium_points: '4',
//   small_points: '1',
//   saving_per_cup:'2',
//   coordinates: new firebase.firestore.GeoPoint(49.244823098822025, -122.89175543048633)
// })
// var store27 = geoCollection.doc("store27");
// geoBatch.set(store27, {
//   name: 'Café Blanc',
//   is_open: 'Open',
//   phone_number: '+17782517424',
//   large_points: '8',
//   medium_points: '4',
//   small_points: '1',
//   saving_per_cup:'2',
//   coordinates: new firebase.firestore.GeoPoint(49.244823798822025, -122.89175543048633)
// })
// var store28 = geoCollection.doc("store28");
// geoBatch.set(store28, {
//   name: 'Café Blanc',
//   is_open: 'Open',
//   phone_number: '+17782517424',
//   large_points: '8',
//   medium_points: '4',
//   small_points: '1',
//   saving_per_cup:'2',
//   coordinates: new firebase.firestore.GeoPoint(49.244823098822025, -122.89175543048633)
// })



// Commit the geoBatch
geoBatch.commit().then(function () {
  console.log("Batch successfully written!");
});



