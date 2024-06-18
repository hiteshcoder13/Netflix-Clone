// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Q-M4IKCQh7_VO6dAI_avhXnE1lBDXRU",
  authDomain: "kklogin-fceb5.firebaseapp.com",
  projectId: "kklogin-fceb5",
  storageBucket: "kklogin-fceb5.appspot.com",
  messagingSenderId: "1009393643415",
  appId: "1:1009393643415:web:19b03fed41a7a0aac95ed2",
  measurementId: "G-DKZ642FXZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);