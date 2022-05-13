// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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