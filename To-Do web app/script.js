const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  const time = taskDateTime.value;

  if (text === "" || time === "") {
    alert("Please enter task and date/time.");
    return;
  }

  const li = document.createElement("li");

  const taskDetails = document.createElement("div");
  taskDetails.className = "task-details";

  const span = document.createElement("span");
  span.textContent = `${text} (${formatDateTime(time)})`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => span.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => editTask(span, time);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  taskDetails.appendChild(span);
  li.appendChild(taskDetails);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}

function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  return date.toLocaleString();
}

function editTask(span, oldTime) {
  const newTask = prompt("Edit task:", span.textContent.split(" (")[0]);
  const newTime = prompt("Edit date & time:", oldTime);

  if (newTask && newTime) {
    span.textContent = `${newTask} (${formatDateTime(newTime)})`;
  }
}
