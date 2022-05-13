// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5R8HeDjdnH6pOyyKMcjWubzmIKnj7m3M",
  authDomain: "challenge-6-67a39.firebaseapp.com",
  projectId: "challenge-6-67a39",
  storageBucket: "challenge-6-67a39.appspot.com",
  messagingSenderId: "319665601002",
  appId: "1:319665601002:web:1ac11984d7a9ecdf3c5a93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);