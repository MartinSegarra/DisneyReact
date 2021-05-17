import firebase from "firebase";
import "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJTjzEkcFLY0qTN8-Bsm3GnmKzLdS-194",
  appId: "1:728101603544:web:02d4d2a57fcc8109b16fad",
  authDomain: "disneystore---reactjs.firebaseapp.com",
  measurementId: "G-EP84KNQ0NB",
  messagingSenderId: "728101603544",
  projectId: "disneystore---reactjs",
  storageBucket: "disneystore---reactjs.appspot.com",
});

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)