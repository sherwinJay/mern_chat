import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCBBuTndT9m1goO2zPdgMG-dYJSkOUMKls",
  authDomain: "whatsapp-clone-8a3ce.firebaseapp.com",
  projectId: "whatsapp-clone-8a3ce",
  storageBucket: "whatsapp-clone-8a3ce.appspot.com",
  messagingSenderId: "1062736227614",
  appId: "1:1062736227614:web:7a69028abad5634b83ed0f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;