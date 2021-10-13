// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
import { name } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBf65Xh9QSHqlmC8ptq7-HDlx3Dgxw4Jwc",
    authDomain: "whatsapp-clone-8f3dd.firebaseapp.com",
    projectId: "whatsapp-clone-8f3dd",
    storageBucket: "whatsapp-clone-8f3dd.appspot.com",
    messagingSenderId: "692674402251",
    appId: "1:692674402251:web:386fa55383952999a0c84e",
    measurementId: "G-RDNX6QWJVH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
  