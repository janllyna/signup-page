// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "test100-bc768.firebaseapp.com",
  projectId: "test100-bc768",
  storageBucket: "test100-bc768.firebasestorage.app",
  messagingSenderId: "1074479653644",
  appId: "1:1074479653644:web:eb3b5bd169c9847e789f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
const db=getFirestore(app);
export{app,auth,db};
