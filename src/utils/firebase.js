import { initializeApp } from "firebase/app";
import { getAuth,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfVeKeRHT3C-g4tkat5Y5WrsfBTQQWQNE",
  authDomain: "react-ecomerce-30da9.firebaseapp.com",
  projectId: "react-ecomerce-30da9",
  storageBucket: "react-ecomerce-30da9.appspot.com",
  messagingSenderId: "80217411179",
  appId: "1:80217411179:web:708d62ecf8599929ea2b2e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut
}