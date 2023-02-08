import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaNVl_2Rv2DzPqeKF4Wu4YeRZh2tr8Z8k",
  authDomain: "finance-tracker-c230e.firebaseapp.com",
  projectId: "finance-tracker-c230e",
  storageBucket: "finance-tracker-c230e.appspot.com",
  messagingSenderId: "22568224992",
  appId: "1:22568224992:web:cc481863081b4aadcba885",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
