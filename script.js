 function startProject(){

document.getElementById("start").style.display="none";
document.getElementById("main").style.display="block";
document.getElementById("sound").play();

startKisses();
}

function startKisses(){
setTimeout(createKiss,100);
}

function createKiss(){

let kiss=document.createElement("div");
kiss.classList.add("kiss");
kiss.innerHTML="💋";
document.body.appendChild(kiss);

 let kissSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
kissSound.play();
setTimeout(()=>{
kiss.remove();
},1500);

setTimeout(createKiss,200); // next kiss
}
