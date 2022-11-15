// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPSQn-vvnhEVN2tY8AiTl6ifEjii6jig4",
  authDomain: "media-hubfazil.firebaseapp.com",
  projectId: "media-hubfazil",
  storageBucket: "media-hubfazil.appspot.com",
  messagingSenderId: "1092120589065",
  appId: "1:1092120589065:web:0751d3b898fa275d1419d8",
  measurementId: "G-6JDE9HX9S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);

const db = getFirestore(app);

export default app;

export {db};

