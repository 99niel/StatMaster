var displayContent = document.getElementById("displayData");
var btn1 = document.getElementById("btn");
btn1.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:3000/students_temp')
    ourRequest.onload = function () {
        var ourdata = JSON.parse(ourRequest.responseText)
        renderHTML(ourdata);

    };
    ourRequest.send();
})

var btn2 = document.getElementById("redirect");
btn2.addEventListener("click", function(){
     var redir = new XMLHttpRequest();
    redir.open('GET', 'http://localhost:3000/index2')
    redir.onload = function () {
       window.location.assign('http://localhost:3000/index2');
    };
    redir.send();
})

function renderHTML(data) {
    var HTMLString = "";
    
  setInterval(function() {alert("Please find the below data")}, 3000);
  
    for (i = 0; i < data.length; i++) {
        HTMLName = data[i].name;
        HTMLAge = data[i].age;
        var y = document.createElement("TR");
        y.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(y);

        var x = document.createElement("TD");
        var t = document.createTextNode(HTMLName);
        x.appendChild(t);
        document.getElementById("myTr").appendChild(x);

        var m = document.createElement("TD");
        var n = document.createTextNode(HTMLAge);
        m.appendChild(n);
        document.getElementById("myTr").appendChild(m);
        
        displayContent.insertAdjacentHTML('afterend', HTMLString);

    }

}


var $name = $('#name');
var $age = $('#age');

$('#add-data').on('click', function () {
    var order = {
        name: $name.val(),
        age: $age.val(),
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/students_temp',
        data: order,
        success: function () {
            alert('success')
        },
        error: function () {
            alert('error');
        }
    })
})
