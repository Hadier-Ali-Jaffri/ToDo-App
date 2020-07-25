
var list = document.getElementById("list")


function addTodo(){
    var todo_item = document.getElementById("item");

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)



    
    li.appendChild(editBtn)
    li.appendChild(delBtn)

    list.appendChild(li)
    todo_item.value = ""

    // console.log(li)
} 

function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var vel = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("enter edit value",vel)
    e.parentNode.firstChild.nodeValue = editValue
  
}

function deleteAll(){
    list.innerHTML = ""
}