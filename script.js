const inputBox=document.getElementById("inputBox")
const addBtn=document.getElementById("addBtn")
const todoList=document.getElementById("todoList")


const addTodo = ()=>{
     // alert("Hello World")
     const inputText=inputBox.value.trim();
     console.log(inputText);
     if (inputText.length <=0) {
          alert("Write Something")
          return;
     }

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
     editBtn.classList.add("btn","deleteBtn");
     li.appendChild(deleteBtn)

     todoList.appendChild(li)
     // console.log(todoList.appendChild(li));
     inputBox.value="";
}

addBtn.addEventListener("click",addTodo)