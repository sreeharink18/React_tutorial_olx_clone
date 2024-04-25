import firebase from 'firebase/compat/app';
// import 'firebase'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDKQEQRqM-wPXRn52PAwQ83HB6Ji3DBdys",
    authDomain: "oxl-clone-2b1a2.firebaseapp.com",
    projectId: "oxl-clone-2b1a2",
    storageBucket: "oxl-clone-2b1a2.appspot.com",
    messagingSenderId: "364595195039",
    appId: "1:364595195039:web:3a01f1b99228270eb2c6aa",
    measurementId: "G-C9GVMH9S6F"
  };

  export default firebase.initializeApp(firebaseConfig);