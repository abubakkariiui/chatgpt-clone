// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJSHv7eTQIN-7x-NR8ZOW-fCRJ-kdbvzQ",
  authDomain: "chatgpt-clone-62205.firebaseapp.com",
  projectId: "chatgpt-clone-62205",
  storageBucket: "chatgpt-clone-62205.appspot.com",
  messagingSenderId: "649160748192",
  appId: "1:649160748192:web:1331a335ddae1135e2adc5",
};

// Initialize Firebase

const app = getApps().length ? getApp : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
