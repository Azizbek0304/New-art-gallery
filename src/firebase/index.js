import 'firebase/auth';
import 'firebase/firestore'; // If you plan to use Firestore
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAos61kKs0TOeoFofM-gCWijqjA65xKUmQ",
  authDomain: "photogalleryapp-81c36.firebaseapp.com",
  projectId: "photogalleryapp-81c36",
  storageBucket: "photogalleryapp-81c36.appspot.com",
  messagingSenderId: "330614975316",
  appId: "1:330614975316:web:c3d639d9987705fe2bb6c1",
  measurementId: "G-EGVK5TQEPB"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export default fireBaseApp;