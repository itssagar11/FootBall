"use strict";

function move(event){
  console.log(event.clientX+" "+event.clientY);
  let di= this.getBoundingClientRect();
  let x=(event.clientX-(50/2)-di.left);
  let y=(event.clientY-(50/2)-di.top);
  if(y<0) y=0;
  if(x<0) x=0;
  if(y+di.left+(50/2)>=di.left) y=y-(50/2);
  if(x+di.top+(50/2)>=di.bottom) x=x-(50/2);
  x+='px';
  y+='px';
  console.log((x+di.left)+y+" "+di.left+" "+di.top);
  document.getElementById("ball").style.left = x;
  document.getElementById("ball").style.top=y;

}


groundid.addEventListener("click",move);

