import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfyRt8QsfPx7-ubuCHvsAMFANW2DONmVI",
    authDomain: "booking-web-65d90.firebaseapp.com",
    databaseURL: "https://booking-web-65d90.firebaseio.com",
    projectId: "booking-web-65d90",
    storageBucket: "booking-web-65d90.appspot.com",
    messagingSenderId: "310137012358",
    appId: "1:310137012358:web:4e0a069ac08db131c29107"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase