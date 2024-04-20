// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-78530.firebaseapp.com",
  projectId: "blog-78530",
  storageBucket: "blog-78530.appspot.com",
  messagingSenderId: "805400326212",
  appId: "1:805400326212:web:c16f5d3639763baec54c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);