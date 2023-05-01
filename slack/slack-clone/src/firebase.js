import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_XrKB1EJuhl6wq_JD4MBXd8QqWiXSPwY",
    authDomain: "slack-clone-6dad1.firebaseapp.com",
    projectId: "slack-clone-6dad1",
    storageBucket: "slack-clone-6dad1.appspot.com",
    messagingSenderId: "55562840715",
    appId: "1:55562840715:web:f0945beca39e7de609028e",
    measurementId: "G-RM8LPVCL7K"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db

