let x;

document.getElementById("generate").onclick =  function(){
    x = ((Math.random() * 100) + 1);
    fetch("index.txt")
.then(response => response.text());
const lines = data.split("/n");
const lineNumber = x;
document.getElementById("xlabel").innerHTML = lineNumber;
}
