//! ToDo List Projesi

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".list-group")[0];
const secondCardBody = document.querySelectorAll(".list-group")[0];
const clearButton = document.querySelector("#clearButton");

function runEvents() {
  form.addEventListener("submit", addTodo);
}

function addTodo(e) {
  const inputText = addInput.value.trim();
  if (inputText === "") {
    showAlert("danger", "Lütfen bir todo girin...");
  } else {
    //Arayüz ekleme
    addTodoUI(inputText);
  }
  e.preventDefault();
}
function addTodoUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}
