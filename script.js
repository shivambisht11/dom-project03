var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",function(dt){
    crsr.style.left = dt.x+"px";
    crsr.style.top = dt.y+"px";
})