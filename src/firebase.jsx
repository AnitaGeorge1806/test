import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
firebase.initializeApp({
    apiKey: "AIzaSyBozcM7td3td-4ZtQcZtEuaU22hvr-knTA",
  authDomain: "test-d9766.firebaseapp.com",
  projectId: "test-d9766",
  storageBucket: "test-d9766.firebasestorage.app",
  messagingSenderId: "265799253612",
  appId: "1:265799253612:web:0912c96938bad853a9e249",
  measurementId: "G-GD11ME23PF"
});

const auth = firebase.auth();
export { auth } ;
