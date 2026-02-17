 function startProject(){

document.getElementById("start").style.display="none";
document.getElementById("main").style.display="block";
document.getElementById("sound").play();

for(let i=0;i<20;i++){
setTimeout(createKiss,i*100);
}

}

function createKiss(){

let kiss=document.createElement("div");
kiss.className="kiss";
kiss.innerHTML="💋";

kiss.style.left=Math.random()*100+"vw";
kiss.style.top=Math.random()*100+"vh";

document.body.appendChild(kiss);

setTimeout(function(){
kiss.remove();
},1500);

}
