//document.getElementById("para").onclick = function() { fun()  };

function countToTen(){
document.getElementById("para").onclick = function() { fun()  };
 var count = 0;
 while (count < 10) {
 count++;
 document.getElementById("theCount").innerHTML +=
count + "<br />";
 }
}

function funcion() {  
    alert("Welcome to the javaTpoint.com");  
    }  
  
function fun() {  
    document.getElementById("para").innerHTML = "Welcome to the javaTpoint.com";  
    document.getElementById("para").style.color = "blue";  
    document.getElementById("para").style.backgroundColor = "yellow";  
    document.getElementById("para").style.fontSize = "25px";  
    document.getElementById("para").style.border = "4px solid red";   
    }  

function volver() {  
    document.getElementById("para").innerHTML = "Click me";   
    }  