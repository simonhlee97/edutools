import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCE8gOklPtMkjjfbIt-XoG3K4IP_R4cEHE",
    authDomain: "store-crown.firebaseapp.com",
    databaseURL: "https://store-crown.firebaseio.com",
    projectId: "store-crown",
    storageBucket: "store-crown.appspot.com",
    messagingSenderId: "120121196191",
    appId: "1:120121196191:web:d326e28fc7331ddc78ecaa",
    measurementId: "G-P9YHNY1PH5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

