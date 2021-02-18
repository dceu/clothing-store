import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVND4eLThlcxEAVVjJsQGez9X3p6F4g6s",
    authDomain: "dono-clothes.firebaseapp.com",
    projectId: "dono-clothes",
    storageBucket: "dono-clothes.appspot.com",
    messagingSenderId: "1017660750872",
    appId: "1:1017660750872:web:bf996ade47465fb544d76d",
    measurementId: "G-EKEG1ZN4XY"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;