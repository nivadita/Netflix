// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSb0EmSmk5Mhuk0pXpBhuTk3fPrmlNzSE",
  authDomain: "netflix-a1947.firebaseapp.com",
  projectId: "netflix-a1947",
  storageBucket: "netflix-a1947.appspot.com",
  messagingSenderId: "902645566719",
  appId: "1:902645566719:web:aaa94cd9c9468d2473d0ca",
  measurementId: "G-XTG6DMN4N6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
