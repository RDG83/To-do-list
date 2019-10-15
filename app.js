var input = document.getElementById("inputtodo");
var listtodo = document.getElementById("listtodo");
var inputbtn = document.getElementById("inputbtn");

// TOEVOEGEN VAN TODO
function addTodo() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  listtodo.appendChild(li);
  li.addEventListener("click", function() {
    this.style.textDecoration = "line-through";
  });
}

document.getElementById("inputbtn").onclick = addTodo;

// DOORSTREPEN GEDANE TODO
var allLi = document.querySelectorAll("li");

for (let i = 0; i < allLi.length; i++)
  allLi[i].addEventListener("click", function() {
    this.style.textDecoration = "line-through";
  });

// VERWIJDEREN VAN TODO
document.getElementById("listtodo").addEventListener("dblclick", function(e) {
  var tgt = e.target;
  if (tgt.tagName.toUpperCase() == "LI") {
    tgt.parentNode.removeChild(tgt);
  }
});

// RESETTEN VAN GEHELE LIJST
var resbtn = document.getElementById("resbtn");

resbtn.addEventListener("click", function() {
  if (listtodo) {
    while (listtodo.firstChild) {
      listtodo.removeChild(listtodo.firstChild);
    }
  }
});
