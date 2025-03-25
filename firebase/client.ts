// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCSv9e-q_mqsKV0rHY0nKagkdQmWLe9Rp4",
  authDomain: "skyprepwise.firebaseapp.com",
  projectId: "skyprepwise",
  storageBucket: "skyprepwise.firebasestorage.app",
  messagingSenderId: "919110357248",
  appId: "1:919110357248:web:e452c32df722f5da6123e5",
  measurementId: "G-GJHT4TDWFD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp() ;


export const auth  = getAuth(app);
export const db = getFirestore(app)