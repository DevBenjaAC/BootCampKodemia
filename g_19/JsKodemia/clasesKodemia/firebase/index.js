// conection to firebase
import { saveTask } from "./firebase.js";

// Obetener los datos de mi interfaz
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const descripcion = document.querySelector("#description").value;
  saveTask(title, descripcion);
});
