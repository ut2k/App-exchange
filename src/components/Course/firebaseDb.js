import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCOcwsRmLBrbYmMAtwQPkVZCxASXsJSFeo",
    authDomain: "cs394-ef3e4.firebaseapp.com",
    databaseURL: "https://cs394-ef3e4.firebaseio.com",
    projectId: "cs394-ef3e4",
    storageBucket: "cs394-ef3e4.appspot.com",
    messagingSenderId: "550039563722",
    appId: "1:550039563722:web:24a219e0f021a7cfbf7333",
    measurementId: "G-WPBJGYSHNT"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;