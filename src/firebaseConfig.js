// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDoDrox3ek_7zONGZU5OMwCKp0D64fgjQ",
  authDomain: "login-with-firebase-477e1.firebaseapp.com",
  databaseURL: "https://login-with-firebase-477e1-default-rtdb.firebaseio.com",
  projectId: "login-with-firebase-477e1",
  storageBucket: "login-with-firebase-477e1.firebasestorage.app",
  messagingSenderId: "475299131582",
  appId: "1:475299131582:web:e2ea3c2c66c6b4aaaf6eef",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Realtime Database
const auth = getAuth(app);
const database = getDatabase(app);

// Export the initialized modules
export { auth, database };
