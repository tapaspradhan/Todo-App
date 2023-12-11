const inputBox=document.getElementById("inputBox")
const addBtn=document.getElementById("addBtn")
const todoList=document.getElementById("todoList")


let editTodo=null;

// Add a Todo
const addTodo = (e)=>{
     // alert("Hello World")
     const inputText=inputBox.value.trim();
     console.log(inputText);
     if (inputText.length <=0) {
          alert("Write Something")
          return;
     }

     if (addBtn.value==="Save") {
          editTodo.target.previousElementSibling.innerHTML=inputText
          editLocalTodos(inputText)
          addBtn.value="Add";
          inputBox.value=""
     }else{
          const li=document.createElement("li")
          const p=document.createElement("p")

          p.innerHTML=inputText
          li.appendChild(p)
          // Edit Button
          const editBtn=document.createElement("button")
          editBtn.innerText="Edit"
          
          editBtn.classList.add("btn", "editBtn");
          li.appendChild(editBtn)
          // Delete Button
          const deleteBtn=document.createElement("button")
          deleteBtn.innerText="Remove"
          deleteBtn.classList.add("btn","deleteBtn");
          li.appendChild(deleteBtn)

          todoList.appendChild(li)
          // console.log(todoList.appendChild(li));
          inputBox.value="";

          saveLocalTodos(inputText)
     }
}

// Update the Todo
const updateTodo=(e)=>{
     if (e.target.innerHTML==="Remove") {
          todoList.removeChild(e.target.parentElement)
          deleteLocalTodos(e.target.parentElement)
          // console.log(e.target.parentElement);
     }
     // console.log(e.target.innerHTML);

     if(e.target.innerHTML==="Edit"){
          inputBox.value=e.target.previousElementSibling.innerHTML
          addBtn.value="Save"
          inputBox.focus();
          editTodo=e;
     }
}

const saveLocalTodos=(todo)=>{
     let todos;
     if (localStorage.getItem("todos") === null) {
          todos=[];
     }else {
          todos=JSON.parse(localStorage.getItem("todos"))
     }
     // console.log(localStorage.getItem("todos"));
     // console.log(JSON.parse(localStorage.getItem("todos")));
     todos.push(todo);
     localStorage.setItem("todos",JSON.stringify(todos))
     // console.log(todos);
}

const getLocalTodos= ()=>{
     let todos;
     if (localStorage.getItem("todos") === null) {
          todos=[];
     }else {
               todos=JSON.parse(localStorage.getItem("todos"))
               todos.forEach(todo => {
               const li=document.createElement("li")
               const p=document.createElement("p")

               p.innerHTML=todo
               li.appendChild(p)
               // Edit Button
               const editBtn=document.createElement("button")
               editBtn.innerText="Edit"
               editBtn.classList.add("btn", "editBtn");
               li.appendChild(editBtn)
               // Delete Button
               const deleteBtn=document.createElement("button")
               deleteBtn.innerText="Remove"
               deleteBtn.classList.add("btn","deleteBtn");
               li.appendChild(deleteBtn)

               todoList.appendChild(li)
          });
     } 
}

const deleteLocalTodos=(todo)=>{
     let todos;
     if (localStorage.getItem("todos") === null) {
          todos=[];
     }else {
          todos=JSON.parse(localStorage.getItem("todos"))
     }
     let todoText=todo.children[0].innerHTML
     let todoIndex= todos.indexOf(todoText)
     // console.log(todoIndex);
     todos.splice(todoIndex,1)
     localStorage.setItem("todos", JSON.stringify(todos))
     console.log(todoIndex);
     // console.log(todoText.children[0].innerHTML);
}

const editLocalTodos= (todo)=>{
     let todos=JSON.parse(localStorage.getItem("todos"))
     let todoIndex=todo.indexOf(todo)
     todos[todoIndex]=inputBox.value
     localStorage.setItem("todos", JSON.stringify(todos))
}

addBtn.addEventListener("click",addTodo)
todoList.addEventListener("click",updateTodo)
document.addEventListener("DOMContentLoaded", getLocalTodos)