import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9G8AONr3PBhxA6L5A4ser9i86GjgaJAw",
    authDomain: "telegram-clone-f5227.firebaseapp.com",
    projectId: "telegram-clone-f5227",
    storageBucket: "telegram-clone-f5227.appspot.com",
    messagingSenderId: "16241347785",
    appId: "1:16241347785:web:bb025c66130c5c05939118"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;