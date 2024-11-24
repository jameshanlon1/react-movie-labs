// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTMDseZIgHovzH-QskwHaEruW281JTvao",
  authDomain: "movies-assignment-c27bb.firebaseapp.com",
  databaseURL: "https://movies-assignment-c27bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movies-assignment-c27bb",
  storageBucket: "movies-assignment-c27bb.firebasestorage.app",
  messagingSenderId: "185440504282",
  appId: "1:185440504282:web:120ce4d8ad00b62b0618e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();


export const signUpUser = (email, password) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};
 

 export const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};