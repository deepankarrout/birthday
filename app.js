// ==========================================================
// app.js
// Main application bootstrap
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  createStars(180);

  // Hide loader after a short delay (countdown.js also fades it safely)
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 700);
    }, 1200);
  }

  // Replay button
  const replay = document.getElementById("replay");
  if (replay) {
    replay.addEventListener("click", () => location.reload());
  }

});

/* --------------------------------------------------
   Stars
---------------------------------------------------*/

function createStars(count) {
  const container = document.getElementById("stars");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = (Math.random() * 3) + "s";
    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    container.appendChild(star);
  }
}

/* --------------------------------------------------
   Premium Helpers
---------------------------------------------------*/

function fadeIn(element){
  if(!element) return;
  element.classList.remove("fade-out");
  element.classList.add("fade-in");
}

function fadeOut(element){
  if(!element) return;
  element.classList.remove("fade-in");
  element.classList.add("fade-out");
}

/* --------------------------------------------------
   Ambient Glow
---------------------------------------------------*/

(function ambientGlow(){
  const glass=document.querySelector(".glass");
  if(!glass) return;

  let t=0;

  setInterval(()=>{
    t+=0.02;
    const x=Math.sin(t)*8;
    const y=Math.cos(t)*8;
    glass.style.transform=`translate(${x}px,${y}px)`;
  },40);

})();

/* --------------------------------------------------
   Keyboard Shortcut
---------------------------------------------------*/

document.addEventListener("keydown",(e)=>{
  if(e.key.toLowerCase()==="b"){
    if(typeof showBirthday==="function"){
      showBirthday();
    }
  }
});

console.log("%c✨ Premium Birthday Experience Loaded",
"color:#d4af37;font-size:16px;font-weight:bold;");
