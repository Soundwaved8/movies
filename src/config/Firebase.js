
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs-X5VJa8FL9No9NBSYrcNvj7mFgC07h4",
  authDomain: "movie-z-d21db.firebaseapp.com",
  projectId: "movie-z-d21db",
  storageBucket: "movie-z-d21db.appspot.com",
  messagingSenderId: "886107470406",
  appId: "1:886107470406:web:6d2fead38af992a3536847"
};

firebase.initializeApp(firebaseConfig);

export default firebase;