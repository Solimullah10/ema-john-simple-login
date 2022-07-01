// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS6e7JmZR9t3NXKmvX81Bo9FKcC3JrkSA",
    authDomain: "ema-john-simple-login.firebaseapp.com",
    projectId: "ema-john-simple-login",
    storageBucket: "ema-john-simple-login.appspot.com",
    messagingSenderId: "109074982614",
    appId: "1:109074982614:web:6c65017d6b2820dd050b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;