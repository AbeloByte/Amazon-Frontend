// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';  // Firestore Database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrmjWqi2hmC-VVkJMm12GC-n-1-1oAZHY",
  authDomain: "clone-e16e7.firebaseapp.com",
  projectId: "clone-e16e7",
  storageBucket: "clone-e16e7.appspot.com",
  messagingSenderId: "1030756143609",
  appId: "1:1030756143609:web:b3a19978433e9e48e62d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const  auth = getAuth(app);
export const db = getFirestore(app);

