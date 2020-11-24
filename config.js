import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCOUjb0a6AaaLj71-kbvxmKtFR45x3Uc2s",
  authDomain: "bedtime-stories-2df4a.firebaseapp.com",
  databaseURL: "https://bedtime-stories-2df4a.firebaseio.com",
  projectId: "bedtime-stories-2df4a",
  storageBucket: "bedtime-stories-2df4a.appspot.com",
  messagingSenderId: "253706780030",
  appId: "1:253706780030:web:8e252456c0072f48cd072f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   