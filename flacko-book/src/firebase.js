import  { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// initialize firebase with config values
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

let firebase = initializeApp(firebaseConfig);
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

// firebase/Database
const db = app.firestore();

// firebase/Storage
const storage = firebase.storage();

// firebase/Auth
const auth = firebase.auth();

// firebase/AuthProvider
const provider = new firebase.auth.GoogleAuthProvider();

export { storage, auth, provider };

export default db;