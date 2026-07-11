import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPAGmZJLP8JBwKKC73tjcqPWDhrckQPU0",
  authDomain: "codersmonkeys-bf5c9.firebaseapp.com",
  projectId: "codersmonkeys-bf5c9",
  storageBucket: "codersmonkeys-bf5c9.appspot.com",
  messagingSenderId: "152418535597",
  appId: "1:152418535597:web:27b383a52bb70215bdde24",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
