// Creates the close button and appends
var nodeList = document.getElementsByTagName("LI");
var i;
for(i = 0; i < nodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

// Closes and removes item from the list
var closeList = document.getElementsByClassName("close");
var i;
for(i = 0; i < closeList.length; i++) {
    closeList[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Binds enter key to add item to list
var enterInput = document.getElementById("text");
enterInput = addEventListener("keypress", function(f) {
    if(f.key === "Enter") {
        f.preventDefault();
        this.document.getElementById("btn-click").click();
    }
});

// Toggles the checkmark to items when clicked
var myList = document.querySelector("ul");
myList.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checkMark');
    }
}, false);

// Adds user input to the list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input-container").value;
    var a = document.createTextNode(inputValue);
    li.appendChild(a);

    if(inputValue === '') {
        alert("You must type something");
    }
    else {
        document.getElementById("ul-list").appendChild(li);
    }
    document.getElementById("input-container").value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}