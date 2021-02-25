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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    console.log(firestore.doc('users/'));
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);

        }
    };

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;