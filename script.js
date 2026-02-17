 let kissInterval;

function startProject(){

document.getElementById("start").style.display="none";
document.getElementById("main").style.display="block";
document.getElementById("sound").play();

kissInterval = setInterval(createKiss, 250);
}

function createKiss(){

let kiss=document.createElement("div");
kiss.className="kiss";
kiss.innerHTML="💋";
document.body.appendChild(kiss);

// kiss sound
let ks = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
ks.play();

setTimeout(function(){
kiss.remove();
},1500);

}
