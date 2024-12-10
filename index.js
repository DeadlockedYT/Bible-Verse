let x;
document.getElementById("generate").onclick =  function(){
    x = ((Math.random() * 100) + 1);
    x = Math.round(x);
    document.getElementById("xlabel").innerHTML = x;
}
