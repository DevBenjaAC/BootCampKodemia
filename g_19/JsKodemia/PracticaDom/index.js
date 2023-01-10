import { saveTask, getTasks, onSnapshot, collection, db, deleteTask,  } from "./firebase.js";

const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("tasks-container");

window.addEventListener("DOMContentLoaded", async () => {

  onSnapshot(collection(db, "tasks"), (querySnapshot) => {
    let html = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
    <div>
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <button class='btn-delete' data-id = "${doc.id}>Delete</button>
    </div>`;
    });
    taskContainer.innerHTML = html;
    const btnDelete = taskContainer.querySelectorAll('btn-delete')
    btnDelete.forEach(btn =>{
      btn.addEventListener('click', ({target:{dataset}}) =>{
        deleteTask(dataset.id)
      })
    })

  });
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  saveTask(title.value, description.value);
  taskForm.reset();
});
