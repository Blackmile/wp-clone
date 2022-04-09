import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBY1gXT7_L2NxUbqRYXH1oFf00DpUHPF4",
  authDomain: "wp-clone-ea7c0.firebaseapp.com",
  projectId: "wp-clone-ea7c0",
  storageBucket: "wp-clone-ea7c0.appspot.com",
  messagingSenderId: "362828195354",
  appId: "1:362828195354:web:355faaa7397371b4b893a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}

export function signUp(email, password){
    return createUserWithEmailAndPassword(email, password)
}