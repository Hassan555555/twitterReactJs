import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBu4A53HaBMro7gPH_ie2h5mBkxgJOk0Z4",
    authDomain: "twitter-clone-5d5e3.firebaseapp.com",
    databaseURL: "https://twitter-clone-5d5e3.firebaseio.com",
    projectId: "twitter-clone-5d5e3",
    storageBucket: "twitter-clone-5d5e3.appspot.com",
    messagingSenderId: "998666839793",
    appId: "1:998666839793:web:d6555d9882c0e7ca122b50",
    measurementId: "G-PV3RVVJGHY",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;