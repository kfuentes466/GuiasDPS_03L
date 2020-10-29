import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCn4XhcAQXsVikQL5bHyiy6uWtzBk4Ge6k",
    authDomain: "crudereactfirebase.firebaseapp.com",
    databaseURL: "https://crudereactfirebase.firebaseio.com",
    projectId: "crudereactfirebase",
    storageBucket: "crudereactfirebase.appspot.com",
    messagingSenderId: "1006387207830",
    appId: "1:1006387207830:web:02937fbdd6a52572006cb7"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();