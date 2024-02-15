let component = document.getElementById("todos");
let date = document.getElementById("name");
let task = document.getElementById("content");

function handleDelete(event) {
  console.log(event.target);
  event.target.parentElement.remove();
}
function handleSubmit(event) {
  event.preventDefault();
  component.innerHTML += `<div class="todo"><h4>${date.value} : ${task.value}</h4><i onclick="handleDelete(event)" id="trashIcon" class="fa-solid fa-trash-can"></i></div>  `;
}
