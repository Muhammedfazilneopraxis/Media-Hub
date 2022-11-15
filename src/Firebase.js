import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDPSQn-vvnhEVN2tY8AiTl6ifEjii6jig4",
    authDomain: "media-hubfazil.firebaseapp.com",
    projectId: "media-hubfazil",
    storageBucket: "media-hubfazil.appspot.com",
    messagingSenderId: "1092120589065",
    appId: "1:1092120589065:web:0751d3b898fa275d1419d8",
    measurementId: "G-6JDE9HX9S5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        const name = result.user.displayName;
        const email = result.user.email;
        const profilepic = result.user.photoURL;
        console.log(name, email, profilepic)

        // storeing to the local storage
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilepic", profilepic)
    }).catch((err) => {
        console.log(err)
    })
};

