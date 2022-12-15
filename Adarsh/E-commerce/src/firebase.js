// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth }  from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgnveUHTGfiY2ZbiquEToJwnfO6-dJZnM",
  authDomain: "shopingapp-b3fae.firebaseapp.com",
  projectId: "shopingapp-b3fae",
  storageBucket: "shopingapp-b3fae.appspot.com",
  messagingSenderId: "376148596087",
  appId: "1:376148596087:web:c82357682342e246e63d72",
  measurementId: "G-95EP6N114T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;