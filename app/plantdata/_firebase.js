// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "apiKey": "AIzaSyB6BUOlbdr83FzpoGZLh8XdBgTrH4OAO9w",
  "authDomain": "smartgarden-t4.firebaseapp.com",
  "projectId": "smartgarden-t4",
  "storageBucket": "smartgarden-t4.appspot.com",
  "messagingSenderId": "301753337728",
  "appId": "1:301753337728:web:2e4135dcbb3958dad82365",
  "measurementId": "G-6VTJM5HFF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;