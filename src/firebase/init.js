import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCLmouQEQyTCH6FCVfODLE8pZmultYRadA",
  authDomain: "smoothies-da19f.firebaseapp.com",
  databaseURL: "https://smoothies-da19f.firebaseio.com",
  projectId: "smoothies-da19f",
  storageBucket: "smoothies-da19f.appspot.com",
  messagingSenderId: "441614133942",
  appId: "1:441614133942:web:572e7ed4d5de98c100d417",
  measurementId: "G-KK6JXKEP78"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
firebaseApp.analytics();

// export firestore database
export default firebaseApp.firestore();
