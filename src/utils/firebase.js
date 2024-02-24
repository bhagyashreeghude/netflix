// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-xggrEG_dbUR6l_ZCYpMSUOuAupuk3XY",
  authDomain: "netflix-gpt2-3c477.firebaseapp.com",
  databaseURL: "https://netflix-gpt2-3c477-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-gpt2-3c477",
  storageBucket: "netflix-gpt2-3c477.appspot.com",
  messagingSenderId: "1081816584262",
  appId: "1:1081816584262:web:86d47b37fd876d3f53ba47",
  measurementId: "G-Q994KC7S0G",
  site: "movies-netflix-gpt",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

