import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA37CMdoMxTOusk3UhzDAUuXUo0zdU4stY",
  authDomain: "fir-react-7c398.firebaseapp.com",
  projectId: "fir-react-7c398",
  storageBucket: "fir-react-7c398.appspot.com",
  messagingSenderId: "87787855315",
  appId: "1:87787855315:web:9950b1d0acc5874265e326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

