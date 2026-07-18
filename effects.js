// ==========================================================
// effects.js
// Visual effects for Birthday Website
// ==========================================================

const fwCanvas = document.getElementById("fireworks");
const fwCtx = fwCanvas ? fwCanvas.getContext("2d") : null;

function resizeFireworks(){
  if(!fwCanvas) return;
  fwCanvas.width = window.innerWidth;
  fwCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeFireworks);
resizeFireworks();

let particles = [];

function randomColor(){
  const colors = ["#FFD700","#FF6EA8","#7FDBFF","#FFFFFF","#FFA94D"];
  return colors[Math.floor(Math.random()*colors.length)];
}

function createBurst(x,y){
  for(let i=0;i<80;i++){
    particles.push({
      x,y,
      vx:(Math.random()-0.5)*8,
      vy:(Math.random()-0.5)*8,
      life:100,
      color:randomColor()
    });
  }
}

function animateFireworks(){
  if(!fwCtx) return;
  fwCtx.clearRect(0,0,fwCanvas.width,fwCanvas.height);
  particles.forEach((p,i)=>{
    p.x+=p.vx;
    p.y+=p.vy;
    p.vy+=0.03;
    p.life--;
    fwCtx.globalAlpha=Math.max(p.life/100,0);
    fwCtx.fillStyle=p.color;
    fwCtx.beginPath();
    fwCtx.arc(p.x,p.y,2.5,0,Math.PI*2);
    fwCtx.fill();
    if(p.life<=0) particles.splice(i,1);
  });
  fwCtx.globalAlpha=1;
  requestAnimationFrame(animateFireworks);
}
animateFireworks();

function launchFireworks(){
  createBurst(window.innerWidth*0.3,window.innerHeight*0.4);
  createBurst(window.innerWidth*0.7,window.innerHeight*0.3);
  createBurst(window.innerWidth*0.5,window.innerHeight*0.5);
  setInterval(()=>{
    createBurst(Math.random()*window.innerWidth,
                100+Math.random()*window.innerHeight*0.4);
  },1200);
}

function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=["❤","💖","💕","💗","💘"][Math.floor(Math.random()*5)];
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(5+Math.random()*4)+"s";
    h.style.fontSize=(18+Math.random()*20)+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),9000);
  },350);
}

function startPetals(){
  setInterval(()=>{
    const p=document.createElement("div");
    p.className="petal";
    p.textContent="🌹";
    p.style.left=Math.random()*100+"vw";
    p.style.animationDuration=(7+Math.random()*4)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),12000);
  },450);
}

function startConfetti(){
  for(let i=0;i<150;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.top="-10px";
    c.style.left=Math.random()*100+"vw";
    c.style.width="8px";
    c.style.height="14px";
    c.style.background=randomColor();
    c.style.pointerEvents="none";
    c.style.zIndex="60";
    c.style.transform=`rotate(${Math.random()*360}deg)`;
    c.animate([
      {transform:`translateY(0) rotate(0deg)`},
      {transform:`translateY(${window.innerHeight+50}px) rotate(720deg)`}
    ],{
      duration:3000+Math.random()*3000,
      easing:"linear"
    });
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),6500);
  }
}

// Shooting stars
(function(){
  const layer=document.getElementById("shooting-stars");
  if(!layer) return;
  setInterval(()=>{
    const s=document.createElement("div");
    s.className="shooting-star";
    s.style.top=Math.random()*40+"vh";
    s.style.left="-150px";
    layer.appendChild(s);
    setTimeout(()=>s.remove(),3000);
  },5000);
})();
