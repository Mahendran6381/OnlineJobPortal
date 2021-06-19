import firebase from "firebase";
import React from "react";
const api = require('dotenv').config()
var firebaseConfig = {
  apiKey:"< YOUR API KEY>",
  authDomain: "stu-project-e2c02.firebaseapp.com",
  projectId: "stu-project-e2c02",
  storageBucket: "stu-project-e2c02.appspot.com",
  messagingSenderId: "721970511325",
  appId: "1:721970511325:web:49d6c771dde7ab9be78a34",
  measurementId: "G-48X52V6PK7",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
