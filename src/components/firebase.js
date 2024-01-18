import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQuaYXD49vY0gv4pydlgVNUMiWWPhCRQw",
    authDomain: "twitter-clone-d52fe.firebaseapp.com",
    databaseURL: "https://twitter-clone-d52fe.firebaseio.com",
    projectId: "twitter-clone-d52fe",
    storageBucket: "twitter-clone-d52fe.appspot.com",
    messagingSenderId: "702336178114",
    appId: "1:702336178114:web:9f963a49917a737ecfe85b",
    measurementId: "G-E2403GJD3F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;