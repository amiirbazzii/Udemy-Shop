import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDslpGpQ34J_OY45xYM8VzTtotFKhymbzw",
    authDomain: "udemy-shop-db.firebaseapp.com",
    databaseURL: "https://udemy-shop-db.firebaseio.com",
    projectId: "udemy-shop-db",
    storageBucket: "udemy-shop-db.appspot.com",
    messagingSenderId: "1054458055847",
    appId: "1:1054458055847:web:74aee567c0441c4f8c9f82",
    measurementId: "G-0HPEESQRX0"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;