// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from "firebase/auth";
//firebase database
// import { getDatabase } from "firebase/database";
import{getFirestore} from  "firebase/firestore"
//firebase storage
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPWIJT76emrxCPUJku2faKpDsPyIgZ7z4",
  authDomain: "makemytravel-5dbb0.firebaseapp.com",
  projectId: "makemytravel-5dbb0",
  storageBucket: "makemytravel-5dbb0.appspot.com",
  messagingSenderId: "451344900221",
  appId: "1:451344900221:web:aad93eef722f638d11d114",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;