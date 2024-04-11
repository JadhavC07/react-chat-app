// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2hfx9odODYZ58kkw8bi8z0CEf5Bzwv7c",
  authDomain: "chat-app-db818.firebaseapp.com",
  projectId: "chat-app-db818",
  storageBucket: "chat-app-db818.appspot.com",
  messagingSenderId: "540891558135",
  appId: "1:540891558135:web:308a87b591a86e855fa3f2",
  measurementId: "G-Q87XWGWH8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
