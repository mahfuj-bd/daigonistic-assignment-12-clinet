// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3w2GkhsY8gniDLqQOwJHZN8aO9_SFyUo",
  authDomain: "assignment-12-c6253.firebaseapp.com",
  projectId: "assignment-12-c6253",
  storageBucket: "assignment-12-c6253.appspot.com",
  messagingSenderId: "124497632902",
  appId: "1:124497632902:web:62a21b8f5d6834ad68fb07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;