// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBYQH8avCuDor5uR6m0Kwjf1wzOfF-gJ8",
  authDomain: "carhub-fee56.firebaseapp.com",
  projectId: "carhub-fee56",
  storageBucket: "carhub-fee56.appspot.com",
  messagingSenderId: "558735247490",
  appId: "1:558735247490:web:7dcac7d0ee7ffbd17ccc9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;