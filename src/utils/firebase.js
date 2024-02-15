// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// import{ initializeApp } from  'firebase-admin/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-xggrEG_dbUR6l_ZCYpMSUOuAupuk3XY",
  authDomain: "netflix-gpt2-3c477.firebaseapp.com",
  projectId: "netflix-gpt2-3c477",
  storageBucket: "netflix-gpt2-3c477.appspot.com",
  messagingSenderId: "1081816584262",
  appId: "1:1081816584262:web:d0be29b1e1ea8bfb53ba47",
  measurementId: "G-TZENMYYTPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth= getAuth();