// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
import "firebase/firestore";
import * as geofirestore from 'geofirestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYim199FIIdFolStIEfkbfs-8D9bSpaPI",
  authDomain: "byodraft.firebaseapp.com",
  databaseURL: "https://byodraft.firebaseio.com",
  projectId: "byodraft",
  storageBucket: "byodraft.appspot.com",
  messagingSenderId: "223236297712",
  appId: "1:223236297712:web:4ead39c3ca0de5dabd8335",
  measurementId: "G-HM1R44EG8C"
};



if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
    console.error('Firebase initialization error raised', err.stack)
  }
}
// Initialize Firebase
export let Firebase = firebase;



//Create a Firestore reference
export const dbService = firebase.firestore();



