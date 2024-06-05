import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
// import "firebase/compat/auth"
import "firebase/compat/auth";


// your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbZjuCgGCh5EKJ-3RqDv1UQm31CjOo4CU",
  authDomain: "clone-1257b.firebaseapp.com",
  projectId: "clone-1257b",
  storageBucket: "clone-1257b.appspot.com",
  messagingSenderId: "983733740020",
  appId: "1:983733740020:web:9446f8801200ae0fad99a1",
  measurementId: "G-XPVJME79ZQ"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
// const app = firebase.initializeApp(firebaseConfig);
// export  const auth = getAuth(app)
// export const db = app.firebase()
