import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDAvdQPLoplTQvzgu_RB0rAWe8shW4rBt4",
  authDomain: "growwtenofficial.firebaseapp.com",
  projectId: "growwtenofficial",
  storageBucket: "growwtenofficial.appspot.com",
  messagingSenderId: "338041802631",
  appId: "1:338041802631:web:d940ffb980a1e7a58b8d22",
  measurementId: "G-CMD4SX29XM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
