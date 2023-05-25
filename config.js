import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoGQTloYqUi6lFdyd5PxaQOYvveCCoODs",
  authDomain: "alexandria-11945.firebaseapp.com",
  projectId: "alexandria-11945",
  storageBucket: "alexandria-11945.appspot.com",
  messagingSenderId: "817540791632",
  appId: "1:817540791632:web:d47df7d060f90c4a4dc055",
  measurementId: "G-T5MWPCEQW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);