document.addEventListener("DOMContentLoaded", () => {
  // your code here
const inputField = document.getElementById("new-task-description");
const formElement = document.querySelector("form");
formElement.addEventListener('submit', (e) => {
  let newTask =inputField.ariaValueMax
  e.preventDefault();
  if(newTask.length===0){
    alert('Task cannot be empty')
  } else {
    handleToDo(newTask);
  }
  formElement.reset()
  });
});

function css(element, style) {
  for (const property in style)
  element.style[property] = style[property];
}

function handleToDo (newTask) {
let listItem = document.createElement("li");
let btn = document.createElement('button')

css(btn, {
'background-color': 'blue', 
'color' : 'red',
'background' : 'blue', 
'color' : '#ffffff',
'padding' : '6px',
'margin' : '4px',
'font-size' : '12px',  
});
btn.addEventListener('click', handleDelete)
btn.textContent='X Remove'
listItem.innerText= `${newTask}`;
listItem.appendChild(btn)
document.querySelector("#tasks").appendChild(listItem);
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
