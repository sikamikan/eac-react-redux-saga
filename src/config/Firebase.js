import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDx04BRpYdCQYmQKVbcVTs6VmFNwVnYqDU",
  authDomain: "test1-8ae16.firebaseapp.com",
  databaseURL: "https://test1-8ae16.firebaseio.com",
  projectId: "test1-8ae16",
  storageBucket: "test1-8ae16.appspot.com",
  messagingSenderId: "1064019304075"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
