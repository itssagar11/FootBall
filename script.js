
"use strict";

function move(event){
console.log(event.clientX+" "+event.clientY);
  let di= this.getBoundingClientRect();
  let x=(event.clientX-(50/2)-di.left)+'px';
  let y=(event.clientY-(50/2)-di.top)+'px';
  if(y<0) y= 0+'px';
  console.log(x+y+" "+di.left+" "+di.top+" "+di.width+" "+di.height);
document.getElementById("ball").style.left = x;
document.getElementById("ball").style.top=y;

}


groundid.addEventListener("click",move);

