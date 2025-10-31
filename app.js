
var firebaseConfig = {
  apiKey: "AIzaSyBcfkVcJgCMUNqSjRleHOVslI4YVJn0-7Y",
  authDomain: "to-do-application-b8697.firebaseapp.com",
  projectId: "to-do-application-b8697",
  storageBucket: "to-do-application-b8697.firebasestorage.app",
  messagingSenderId: "913685686471",
  appId: "1:913685686471:web:a5f4af4ac8fa4f27d876e2",
  databaseURL: "https://to-do-application-b8697-default-rtdb.firebaseio.com",
};
var app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();
console.log("INit firebase");

var input = document.getElementById("task-input");
var list = document.getElementById("task-list");
function addtodo() {
  if (input.value.trim() !== "") {
    var liElement = document.createElement("li");
    liElement.setAttribute("class", "todo-list");
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);
    //  Create Div
    var span = document.createElement("span"); //<span>
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

    var taskObj = {
      task: input.value.trim(),
    };
    var dbObj = firebase.database().ref("Task").push(taskObj);
    var taskKey = dbObj.key;
    console.log(taskKey);
    liElement.setAttribute("task-key", taskKey);

    input.value = "";
  } else {
    alert("Required Fields are Missing");
  }
}
function dellist(e) {
  var list = e.parentNode.parentNode;
  var getKey = list.getAttribute("data-key");
  console.log(getKey);
  firebase
    .database()
    .ref("Task/" + getKey)
    .remove();
    list.remove()
}
function deleteAll() {
  list.innerHTML = "";
  firebase.database().ref("Task").remove()
}
function editlist(e) {
  var li = e.parentNode.parentNode;
  console.log(li.firstChild);
  var oldValue = li.firstChild.nodeValue;
  console.log(oldValue);
  var newValue = prompt("Edit Added Task :");
  if (newValue.trim() !== "") {
    oldValue = newValue.trim();
    var getKey = li.getAttribute("data-key");
    console.log(getKey);
    firebase
      .database()
      .ref("Task/" + getKey)
      .update({
        task: newValue.trim(),
      });
  }
  e.parentNode.parentNode.firstChild.nodeValue = newValue.trim();

  console.log(li);

  // var updatedList = prompt("Enter Updated list");
}
