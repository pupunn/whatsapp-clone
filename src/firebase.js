import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_WK_tnIpP3bXpHxxRbMmjhQuObK9Ce0w",
    authDomain: "whats-app-clone-fdc8a.firebaseapp.com",
    projectId: "whats-app-clone-fdc8a",
    storageBucket: "whats-app-clone-fdc8a.appspot.com",
    messagingSenderId: "315896910714",
    appId: "1:315896910714:web:8076f75739c56c395cbcc3",
    measurementId: "G-1JXRX3VHS2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,  provider };
export default db;