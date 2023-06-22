const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const taskText = taskInput.value.trim(); 
  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = ''; 
  }
});

function createTaskItem(taskText) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTaskCompletion);
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(deleteButton);

  return li;
}

function toggleTaskCompletion(event) {
  const checkbox = event.target;
  const taskSpan = checkbox.nextElementSibling;

  if (checkbox.checked) {
    taskSpan.classList.add('notcompleted');
  } else {
    taskSpan.classList.remove('completed');
  }
}

function deleteTask(event) {
  const deleteButton = event.target;
  const li = deleteButton.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}