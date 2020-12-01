import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD622Qp1bEucFs7usTou1CUiT_wNtyThVk",
  authDomain: "react-redux-e398c.firebaseapp.com",
  databaseURL: "https://react-redux-e398c.firebaseio.com",
  projectId: "react-redux-e398c",
  storageBucket: "react-redux-e398c.appspot.com",
  messagingSenderId: "664661184807",
  appId: "1:664661184807:web:7d104f0eace637edb9d902",
  measurementId: "G-8FFW1395D4",
};
firebase.initializeApp(config);

export const firestore = firestore.firestore();
export const auth = firestore.auth();
export default firebase;
