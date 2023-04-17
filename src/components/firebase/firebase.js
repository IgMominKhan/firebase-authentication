// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmSaM4PVuiDzx9VhkPm4mpsBnrrpg09GA",
  authDomain: "fir-authentication-415df.firebaseapp.com",
  projectId: "fir-authentication-415df",
  storageBucket: "fir-authentication-415df.appspot.com",
  messagingSenderId: "436677803972",
  appId: "1:436677803972:web:d42387d4c52135011bae91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
