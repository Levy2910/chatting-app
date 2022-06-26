import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-aQiMz34O2Htl6iMLYHKcAsFg-eZX4pc",
  authDomain: "realtime-chatapp-bd834.firebaseapp.com",
  projectId: "realtime-chatapp-bd834",
  storageBucket: "realtime-chatapp-bd834.appspot.com",
  messagingSenderId: "534686717737",
  appId: "1:534686717737:web:158324fbd912d5c326c938",
  measurementId: "G-DZDXWMV8C0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
