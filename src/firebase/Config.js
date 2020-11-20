import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBY304VWe9AcdloUIBBPqfKmNqPpNxVV-U",
    authDomain: "product-manager-40893.firebaseapp.com",
    databaseURL: "https://product-manager-40893.firebaseio.com",
    projectId: "product-manager-40893",
    storageBucket: "product-manager-40893.appspot.com",
    messagingSenderId: "281873072307",
    appId: "1:281873072307:web:09ff596cb060ec6cab70c6"
  };

  
  // Initialize Firebase
  const store = firebase.initializeApp(firebaseConfig);

  export const db = store.firestore();

  