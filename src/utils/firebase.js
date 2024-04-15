
import {getAuth } from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApZOjo14AL3J5vI5duZFZTLrzpzlIsh0g",
  authDomain: "netflix-gpt-india-cae12.firebaseapp.com",
  databaseURL: "https://netflix-gpt-india-cae12-default-rtdb.firebaseio.com",
  projectId: "netflix-gpt-india-cae12",
  storageBucket: "netflix-gpt-india-cae12.appspot.com",
  messagingSenderId: "998300983165",
  appId: "1:998300983165:web:e90b01d0abf074203d3614",
  measurementId: "G-L66BF56Y5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();