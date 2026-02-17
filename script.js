 function startProject(){
document.getElementById("start").style.display="none";
document.getElementById("main").style.display="block";
document.getElementById("sound").play();

setInterval(createKiss,300);
}

function createKiss(){
let kiss=document.createElement("div");
kiss.classList.add("kiss");
kiss.innerHTML="💋";
document.body.appendChild(kiss);

setTimeout(()=>{
kiss.remove();
},1500);
}
