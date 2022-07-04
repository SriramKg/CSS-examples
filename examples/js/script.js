document.addEventListener("DOMContentLoaded", function (event) {
    function sayHello (event) {
        this.textContent = "Said it";
        var name = document.getElementById("name").value;
        //console.log(name);
        var message = "<h3>Hello " + name +"!</h3>";
        document.getElementById("content").innerHTML = message;
        if(name === "student") {
            var title = document.getElementById("title").textContent;
            //console.log(studentChange);
            var title = title + " Welcome to the course";
            document.getElementById("title").innerHTML = title;
        }
        if(name === "javascript") {
            var studentChange1 = document.querySelector("#title").textContent;
            var nameChange1 = studentChange1 + " Hola JS";
            //console.log(nameChange1);
            document.getElementById("title").innerHTML = nameChange1;
        }
        
        
    }
    //document.querySelector("button").addEventListener = (this.onclick, sayHello);
    document.querySelector("button").onclick = sayHello;
    document.querySelector("h1").onmousemove = function (event) {
        if(event.shiftKey === true) {
            console.log("x = " + event.clientX);
            console.log("y = " + event.clientY);
        }
        
    }
});

