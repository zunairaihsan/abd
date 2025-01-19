import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBBALgS_95tais-Ay8EHDxdnL49gcTtEcM",
    authDomain: "soulspot-16370.firebaseapp.com",
    projectId: "soulspot-16370",
    storageBucket: "soulspot-16370.firebasestorage.app",
    messagingSenderId: "660920684556",
    appId: "1:660920684556:web:50396a03aa97d4ae1e9e29",
    measurementId: "G-XQ5NC3R2GQ"
  };

const app = initializeApp(firebaseConfig);


export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();