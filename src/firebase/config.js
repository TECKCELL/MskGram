import firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyARF6F4DgUi71dFLDIXdKcczR8JkIKQxno",
    authDomain: "misaka-gram.firebaseapp.com",
    projectId: "misaka-gram",
    storageBucket: "misaka-gram.appspot.com",
    messagingSenderId: "327514892095",
    appId: "1:327514892095:web:c2426ec6dd7011326b158a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};