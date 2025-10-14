var input = document.getElementById("task-input");
var list = document.getElementById("task-list");
function addtodo() {
  if (input.value.trim() !== "") {
    var liElement = document.createElement("li");
    liElement.setAttribute("class", "todo-list");
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);
    //  Create Div
    var span = document.createElement("span");
    span.setAttribute("class", "btn-holder");
    // Create Delete Button
    var delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delbutton");
    delBtn.setAttribute("onclick", "dellist(this)");
    var textBtn = document.createTextNode("Delete");
    delBtn.appendChild(textBtn);
    // Create icon tag
    var editIcon = document.createElement("i");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square");
    // Create delete icon tag
    var delIcon = document.createElement("i");
    delIcon.setAttribute("class", "fa-solid fa-trash");
    // Create Edit Button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "editbutton");
    editBtn.setAttribute("onclick", "editlist(this)");
    editBtn.appendChild(editText);
    editBtn.appendChild(editIcon);
    delBtn.appendChild(delIcon);
    span.appendChild(delBtn);
    span.appendChild(editBtn);
    liElement.appendChild(span);
    list.appendChild(liElement);
    input.value = "";
  } else {
    alert("Required Fields are Missing");
  }
}
function dellist(e) {
  e.parentNode.parentNode.remove();
}
function deleteAll() {
  list.innerHTML = "";
}
function editlist(e) {
  var updatedList = prompt("Enter Updated list");
  e.parentNode.parentNode.firstChild.nodeValue = updatedList;
}
