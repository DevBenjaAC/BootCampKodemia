// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChHmmWZrkLb8kBaLVE_C6tNjvwYkXctMI",
  authDomain: "fir-javascript-crud-21051.firebaseapp.com",
  projectId: "fir-javascript-crud-21051",
  storageBucket: "fir-javascript-crud-21051.appspot.com",
  messagingSenderId: "403513822258",
  appId: "1:403513822258:web:29bed944aa2299935c002b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => {
  addDoc(collection(db, "tasks"), { title: title, description: description });
};

//obtener de DB
export const getTasks = () => getDocs(collection(db,'tasks'))

//cuando los datos cambien
export const onGetTask = () => console.log(onGetTask);

export{
  onSnapshot,
  collection,
  db
}