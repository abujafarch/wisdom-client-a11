// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKK4z8cUQzLcdd_KX_IQzu8_rgimmM8gE",
  authDomain: "wisdom-cca7e.firebaseapp.com",
  projectId: "wisdom-cca7e",
  storageBucket: "wisdom-cca7e.appspot.com",
  messagingSenderId: "1045904570139",
  appId: "1:1045904570139:web:2a35171639916b6096c5be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app