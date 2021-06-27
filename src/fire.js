import firebase from "firebase";
import React from "react";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA02kVw9yiTwuhfKMVIyyBbPIn2kmcBStQ",
  authDomain: "onlinejobporatal.firebaseapp.com",
  projectId: "onlinejobporatal",
  storageBucket: "onlinejobporatal.appspot.com",
  messagingSenderId: "397251348795",
  appId: "1:397251348795:web:5cea873968c1520b0d4f1e",
  measurementId: "G-600L6BXFKX",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
