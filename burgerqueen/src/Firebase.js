import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKOm7AJWeh3GV3XMV0pTw-tjPL1HHuXyc",
    authDomain: "burgerqueen-445d2.firebaseapp.com",
    projectId: "burgerqueen-445d2",
    storageBucket: "burgerqueen-445d2.appspot.com",
    messagingSenderId: "193356376348",
    appId: "1:193356376348:web:99e7a8383d27897958f2d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth }