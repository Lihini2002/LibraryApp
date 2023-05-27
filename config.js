import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig ={
    apiKey: "AIzaSyBsSJfMmk8y2qUKCLUJLtFp9n_7J0zgmyU",

  authDomain: "library-project-efd46.firebaseapp.com",

  databaseURL: "https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "library-project-efd46",

  storageBucket: "library-project-efd46.appspot.com",

  messagingSenderId: "915278205944",

  appId: "1:915278205944:web:a506eae80160b4a7c33c0d",

  measurementId: "G-P2S5NZ811H"
}



const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };