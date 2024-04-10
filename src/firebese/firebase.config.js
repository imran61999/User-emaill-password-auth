// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgWru0iFpzP2bQHfqXZwmnO7b3eeEkGHE",
  authDomain: "user-email-password-auth-70242.firebaseapp.com",
  projectId: "user-email-password-auth-70242",
  storageBucket: "user-email-password-auth-70242.appspot.com",
  messagingSenderId: "751679616794",
  appId: "1:751679616794:web:da6835c36366ab5e089ea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;