import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0aDq2ryzmMMOZWEbvesc5R7-Kxx65l2Q",
    authDomain: "marioplan-68f95.firebaseapp.com",
    databaseURL: "https://marioplan-68f95.firebaseio.com",
    projectId: "marioplan-68f95",
    storageBucket: "marioplan-68f95.appspot.com",
    messagingSenderId: "676526367800"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
