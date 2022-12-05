// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJx7N2MQowWNjNzKT7rWV1J84kiGKiVhY",
  authDomain: "kaizen-group-website.firebaseapp.com",
  projectId: "kaizen-group-website",
  storageBucket: "kaizen-group-website.appspot.com",
  messagingSenderId: "999203900373",
  appId: "1:999203900373:web:122d3168ca1b7b81a10b5c",
  measurementId: "G-19GW7EYLKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);