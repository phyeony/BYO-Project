// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/firestore";



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



  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firebaseInstance = firebase;
export const dbService = firebase.firestore();







