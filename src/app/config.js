// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACETGtbn52hhnjY1NMOmGs5XsjHC9pU8c",
  authDomain: "health-up-728e3.firebaseapp.com",
  projectId: "health-up-728e3",
  storageBucket: "health-up-728e3.appspot.com",
  messagingSenderId: "848381043127",
  appId: "1:848381043127:web:396a657993e5ffa4510832"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)