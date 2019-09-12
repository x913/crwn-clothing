import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;