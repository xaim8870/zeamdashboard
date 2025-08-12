// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAySYSr_9sKRDA5EEklWSAiRwXQJLwr8vQ",
  authDomain: "zeamhealthchat.firebaseapp.com",
  projectId: "zeamhealthchat",
  storageBucket: "zeamhealthchat.firebasestorage.app",
  messagingSenderId: "912887237976",
  appId: "1:912887237976:web:89994ffd7da5489bd8692d",
  measurementId: "G-TB8KS8CH2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);