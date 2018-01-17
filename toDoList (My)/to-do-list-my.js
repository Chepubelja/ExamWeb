// Create a "close" button and append it to each list item
var myNodeList = document.getElementsByTagName("LI");
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var task = this.parentElement;
        task.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item

var tasks_list = document.querySelector("UL");

tasks_list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.onclick = function(e) {
            this.contentEditable = true;
            this.focus();
            this.style.backgroundColor = '#E0E0E0';
            // this.style.border = '1px dotted black';
        };
        e.onmouseout = function() {
            this.style.backgroundColor = '#ffffff';
            // this.style.border = '';
            // this.contentEditable = false;
        }
    }
    // div.onclick = function(e) {
    //     this.contentEditable = true;
    //     this.focus();
    //     this.style.backgroundColor = '#E0E0E0';
    //     this.style.border = '1px dotted black';
    // }
    //
    // div.onmouseout = function() {
    //     this.style.backgroundColor = '#ffffff';
    //     this.style.border = '';
    //     this.contentEditable = false;
    // }

});

// Create a new list item when clicking on the "Add" button

function addNewElement() {
    oForm = document.forms[0];
    input_value = oForm.elements["task_input"].value;

    var new_element = document.createElement("LI");
    // var input = document.getElementsByClassName("header__input").innerHTML;
    // alert(input);
    var text = document.createTextNode(input_value);
    new_element.appendChild(text);

    if (input_value === "") {
        alert("Write something in input field")
    }
    else {
        tasks_list.appendChild(new_element);
    }
    oForm.elements["task_input"].value = "";
    // document.getElementById("input_field").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    new_element.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var parent = this.parentElement;
            parent.style.display = "none";
        }
    }
}