var list =document.getElementById("list");

function save_list(){
    var toDoList =document.getElementById("to-dolist");
    var li =document.createElement('li');
    var text=document.createTextNode(toDoList.value);
    li.appendChild(text)
    list.appendChild(li)
    console.log(li)
}