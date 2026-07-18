// countdown.js
const targetDate = new Date(new Date().getFullYear(),6,19,0,0,0).getTime();
//const targetDate = Date.now() + (10 * 1000); // 10 seconds from now

const countdownPage=document.getElementById("countdownPage");
const birthdayPage=document.getElementById("birthdayPage");

const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");

let timer;
let started=false;

const pad=n=>String(n).padStart(2,"0");

function updateCountdown(){
 const now=Date.now();
 let diff=targetDate-now;

 if(diff<=0){
   showBirthday();
   return;
 }

 daysEl.textContent=pad(Math.floor(diff/86400000));
 hoursEl.textContent=pad(Math.floor((diff%86400000)/3600000));
 minutesEl.textContent=pad(Math.floor((diff%3600000)/60000));
 secondsEl.textContent=pad(Math.floor((diff%60000)/1000));
}

function showBirthday(){
 if(started) return;
 started=true;
 clearInterval(timer);

 countdownPage.classList.add("fade-out");

 setTimeout(()=>{
   countdownPage.style.display="none";
   birthdayPage.style.display="flex";
   birthdayPage.classList.add("fade-in");
   birthdayPage.style.opacity="1";

   startMusic();

   if(typeof launchFireworks==="function") launchFireworks();
   if(typeof startConfetti==="function") startConfetti();
   if(typeof startHearts==="function") startHearts();
   if(typeof startPetals==="function") startPetals();
   if(typeof beginStory==="function") beginStory();
 },800);
}

function startMusic(){
 const music=document.getElementById("music");
 if(!music) return;
 music.volume=0.35;
 const p=music.play();
 if(p){
   p.catch(()=>{
     document.addEventListener("click",()=>music.play().catch(()=>{}),{once:true});
   });
 }
}

document.addEventListener("DOMContentLoaded",()=>{
 const loader=document.getElementById("loader");
 setTimeout(()=>{
   if(loader){
     loader.style.opacity="0";
     setTimeout(()=>loader.style.display="none",700);
   }
 },1500);

 updateCountdown();
 timer=setInterval(updateCountdown,1000);
});
