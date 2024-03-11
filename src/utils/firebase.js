
import {getAuth } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEaS8y2EbuiE-aZqju51IgJ5XEPhvYymQ",
  authDomain: "netflix-gpt-4b933.firebaseapp.com",
  databaseURL: "https://netflix-gpt-4b933-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-gpt-4b933",
  storageBucket: "netflix-gpt-4b933.appspot.com",
  messagingSenderId: "914397935043",
  appId: "1:914397935043:web:f77ed3135c5924cd9e3976",
  measurementId: "G-3TB7MHF0E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();