// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQn4jZEOmDi-BVeNVNpROji0rzSmRQ-uw",
  authDomain: "challenge06-2526c.firebaseapp.com",
  projectId: "challenge06-2526c",
  storageBucket: "challenge06-2526c.appspot.com",
  messagingSenderId: "622631028406",
  appId: "1:622631028406:web:3800052e55ff1b385b4817"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);