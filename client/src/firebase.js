// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2f602.firebaseapp.com",
  projectId: "mern-auth-2f602",
  storageBucket: "mern-auth-2f602.appspot.com",
  messagingSenderId: "895319469321",
  appId: "1:895319469321:web:b6e84dfc0e0694bcdf37d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
