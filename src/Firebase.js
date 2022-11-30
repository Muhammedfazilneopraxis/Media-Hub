import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Navigate as navigate, redirect } from "react-router-dom";


const firebaseConfig = {
    apiKey: "AIzaSyDPSQn-vvnhEVN2tY8AiTl6ifEjii6jig4",
    authDomain: "media-hubfazil.firebaseapp.com",
    projectId: "media-hubfazil",
    storageBucket: "media-hubfazil.appspot.com",
    messagingSenderId: "1092120589065",
    appId: "1:1092120589065:web:0751d3b898fa275d1419d8",
    measurementId: "G-6JDE9HX9S5"
};


export const Firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Firebase);
export const db = getFirestore(Firebase);
export const auth = getAuth(Firebase);

// auth.currentUser // null

let userlogged = auth.currentUser;
console.log('Current user name is:', userlogged);

const provider = new GoogleAuthProvider()



export const login = () => {
 
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        // let userName = result.user.displayName;
    }).catch((err) => {
        console.log(err)
    })
};


export const logout = () => {
    signOut(auth).then((res) => {
        console.log('sign out successfully', res)
    }).catch((error) => {
        console.log('error while sign out', error)
    });
};











