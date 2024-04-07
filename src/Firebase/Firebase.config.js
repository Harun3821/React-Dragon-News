// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeU-PLaahJD4SkmN8kll9Z3YrE2RyZej4",
  authDomain: "react-dragon-news-auth-4fda6.firebaseapp.com",
  projectId: "react-dragon-news-auth-4fda6",
  storageBucket: "react-dragon-news-auth-4fda6.appspot.com",
  messagingSenderId: "1083819922547",
  appId: "1:1083819922547:web:dbd30b697b6a35a53f0606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;