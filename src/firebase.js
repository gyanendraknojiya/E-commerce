// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP4JirwZCcRcfSE1UEdgyL-hjqrmrLEkg",
  authDomain: "myshop-38fa0.firebaseapp.com",
  projectId: "myshop-38fa0",
  storageBucket: "myshop-38fa0.appspot.com",
  messagingSenderId: "406739432828",
  appId: "1:406739432828:web:5d8e6882bb2792b3b1e0f9",
  measurementId: "G-4MJSEQY2XH"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;

  