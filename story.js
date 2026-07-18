// ==========================================================
// story.js
// Birthday story & typewriter
// ==========================================================

const letterText = `Happy Birthday ❤️

Happy Birthday! 🎉💙

Wishing you a day filled with happiness, laughter, and beautiful moments that you'll always remember.

May this new year of your life bring you good health, endless smiles, success in everything you do, and the strength to overcome every challenge. I hope all your dreams slowly turn into reality and that every day gives you a new reason to smile.

Thank you for being such a wonderful person. Never stop being the amazing person you are.

May your journey ahead be filled with love, peace, exciting adventures, unforgettable memories, and people who always value and support you.

Enjoy your special day to the fullest. You deserve all the happiness in the world.

Happy Birthday once again! Have an incredible year ahead. 🎂🎈💙`;

const typeTarget = document.getElementById("typewriter");
const messageBox = document.getElementById("messageBox");

const introMessages = [
  "✨ The wait is finally over...",
  "🎂 Today is your special day.",
  "💖 May every moment bring you happiness.",
  "🌹 You deserve all the love in the world.",
];

function typeWriter(text, speed = 35){
  if(!typeTarget) return;
  typeTarget.textContent = "";
  let i = 0;
  (function type(){
    if(i < text.length){
      typeTarget.textContent += text.charAt(i++);
      setTimeout(type, speed);
    }
  })();
}

function showMessages(){
  if(!messageBox) return;
  messageBox.textContent = "";
  introMessages.forEach((msg, idx)=>{
    setTimeout(()=>{
      const p = document.createElement("p");
      p.className = "fade-in";
      p.textContent = msg;
      messageBox.appendChild(p);
    }, idx * 1400);
  });
}

function revealStoryPages(){
  document.querySelectorAll(".story-page").forEach((page, index)=>{
    setTimeout(()=>{
      page.classList.add("reveal");
      page.style.opacity = "1";
    }, index * 800);
  });
}

function bindReplay(){
  const btn = document.getElementById("replay");
  if(!btn) return;
  btn.addEventListener("click", ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
    location.reload();
  });
}

function beginStory(){
  showMessages();
  setTimeout(()=>typeWriter(letterText), 2500);
  setTimeout(revealStoryPages, 5000);
  bindReplay();
}

document.addEventListener("DOMContentLoaded", bindReplay);
