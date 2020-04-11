import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoRIp_mz30HAT6Yp6GC5wOm7lgBp3TPas",
    authDomain: "crown-db-51c62.firebaseapp.com",
    databaseURL: "https://crown-db-51c62.firebaseio.com",
    projectId: "crown-db-51c62",
    storageBucket: "crown-db-51c62.appspot.com",
    messagingSenderId: "788540898139",
    appId: "1:788540898139:web:0a69a6864bcd176976f87e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
