// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCopa8vEN9PbD96ry_RrXi2YlkI2jA6dUs",
  authDomain: "quiz-c6684.firebaseapp.com",
  projectId: "quiz-c6684",
  storageBucket: "quiz-c6684.firebasestorage.app",
  messagingSenderId: "713833396322",
  appId: "1:713833396322:web:fc27a1e949305ed55c393b",
  measurementId: "G-6KCY3F219G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, app, auth };
