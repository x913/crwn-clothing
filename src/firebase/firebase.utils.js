import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { firestore } from './firebase.utils';

const config = {
    apiKey: "AIzaSyAcdpOD0ilTO12sE9KQLB3PSMKVRsUevTg",
    authDomain: "crwn-db-4dbda.firebaseapp.com",
    databaseURL: "https://crwn-db-4dbda.firebaseio.com",
    projectId: "crwn-db-4dbda",
    storageBucket: "",
    messagingSenderId: "1039380816961",
    appId: "1:1039380816961:web:f5b231985483ce139b12c0"
};

firebase.initializeApp(config);

export const createUserProfileDocuments = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        // create new user
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;