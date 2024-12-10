let x;
document.getElementById("generate").onclick =  function(){
    x = (Math.random() * 100) + 1;
    document.getElementById("xlabel").innerHTML = x;
}
