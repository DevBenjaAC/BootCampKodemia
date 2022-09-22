import {
  getFirestore,
  addDoc,
  deleteDoc,
  updateDoc,
  getDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxd8go-vT9LR0HMtjfbLQRfqH15pirTfU",
  authDomain: "fir-crud-84de8.firebaseapp.com",
  projectId: "fir-crud-84de8",
  storageBucket: "fir-crud-84de8.appspot.com",
  messagingSenderId: "429051055603",
  appId: "1:429051055603:web:028b9593457040c854d686",
};

const app = initializeApp(firebaseConfig);

// conection to firebase

// conection to firestore

const db = getFirestore();

// Funcion que me ayudara a guardar objetos de tipo task dentro de la canasta task
export const saveTask = (titulo, descripcion) => {
  const objetoAGuardar = {
    title: titulo,
    description: descripcion,
  };
  const canasta = collection(db, "tasks");
  addDoc(canasta, objetoAGuardar);
};

//Enviar post a Data Base
const savePost = (titulo, usuario, imagenPortada, categoria, imagenAvatar, etiquetas, contenido ) => {
  const guardaPost = {
    title: titulo,
    usuario: usuario,
    imagenPortada: imagenPortada,
    categoria: categoria,
    imagenAvatar: imagenAvatar,
    etiquetas: etiquetas,
    contenido: contenido
  };
  const caja = collection(db, "Dev.toPOST");
  addDoc(caja, guardaPost);
};