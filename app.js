var list = document.getElementById("list");

function save_list() {
    var toDoList = document.getElementById("to-dolist");

    // create li list and text
    var li = document.createElement('li');
    var text = document.createTextNode(toDoList.value);
    li.appendChild(text);
    // console.log(li)
    
    //delete button
    var delebtn=document.createElement("button");
    var detetext =document.createTextNode("delete");
    delebtn.setAttribute("class" , "del");
    delebtn.setAttribute("onclick" ,"deleItem(this)")
    delebtn.appendChild(detetext)

   // edit button
   var editButton= document.createElement("button");
   var editText =document.createTextNode("edit text");
   editButton.setAttribute("class" , "edit");
   editButton.setAttribute("onclick" ,"etext(this)")
   editButton.appendChild(editText);

   //li upper append kara do
   li.appendChild(editButton);


    // delebtn.appendChild('li');
    li.appendChild(delebtn);
    
    
    list.appendChild(li);
    
    toDoList.value = ""
} 

function deleItem(e){
 console.log(e)
 e.parentNode.remove()
}


function deletedAll(){
    list.innerHTML = ""
}


function etext(a){
    var val =a.parentNode.firstChild.nodeValue;
    var editlop = prompt(" edit the value", val);
//    console.log(a.parentNode.firstChild.nodeValue);
a.parentNode.firstChild.nodeValue =editlop;
}