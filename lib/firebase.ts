import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxYm_fub0K60wXjZUFnOkn29T5hejeWsg",
  authDomain: "pac-bulu.firebaseapp.com",
  projectId: "pac-bulu",
  storageBucket: "pac-bulu.firebasestorage.app",
  messagingSenderId: "525732872875",
  appId: "1:525732872875:web:cfc769837da3971c1a2dee",
  measurementId: "G-V2JDTEWE52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
