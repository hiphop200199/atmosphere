document.addEventListener("DOMContentLoaded", () => {
  let container=document.querySelector(".web-container");
  let aurora = document.getElementById("aurora");
  let snowman = document.getElementById("snowman");
  let flowerRing = document.getElementById("flowerRing");
  let dam = document.getElementById("dam");
  let title=document.getElementById("web-title");
  let pic=document.querySelector(".web-mypic");
  let soundCold=new Audio("cold.mp3");
  let soundLight=new Audio("light.mp3");
  let soundMachine=new Audio("machine.mp3");
  let soundPiano=new Audio("piano.mp3");
  dam.addEventListener("click",function(){
    container.classList.add("dam");
    container.classList.remove("aurora");
    container.classList.remove("snowman");
    container.classList.remove("flower-ring");
    title.classList.add("dam");
    title.classList.remove("aurora");
    title.classList.remove("snowman");
    title.classList.remove("flower-ring");
    soundMachine.volume=0.5;
    soundMachine.play();
    soundCold.pause();
    soundLight.pause();
    soundPiano.pause();
  })
  aurora.addEventListener("click",function(){
    container.classList.add("aurora");
    container.classList.remove("dam");
    container.classList.remove("snowman");
    container.classList.remove("flower-ring");
    title.classList.add("aurora");
    title.classList.remove("dam");
    title.classList.remove("snowman");
    title.classList.remove("flower-ring");
    soundLight.volume=0.5;
    soundLight.play();
    soundCold.pause();
    soundPiano.pause();
    soundMachine.pause();
  })
  snowman.addEventListener("click",function(){
    container.classList.add("snowman");
    container.classList.remove("aurora");
    container.classList.remove("dam");
    container.classList.remove("flower-ring");
    title.classList.add("snowman");
    title.classList.remove("aurora");
    title.classList.remove("dam");
    title.classList.remove("flower-ring");
    soundCold.volume=0.5;
    soundCold.play();
    soundMachine.pause();
    soundLight.pause();
    soundPiano.pause();
  })
  flowerRing.addEventListener("click",function(){
    container.classList.add("flower-ring");
    container.classList.remove("aurora");
    container.classList.remove("snowman");
    container.classList.remove("dam");
    title.classList.add("flower-ring");
    title.classList.remove("aurora");
    title.classList.remove("snowman");
    title.classList.remove("dam");
    soundPiano.volume=0.5;
    soundPiano.play();
    soundCold.pause();
    soundLight.pause();
    soundMachine.pause();
  })
  pic.addEventListener("click",function(){
    container.classList.remove("flower-ring");
    container.classList.remove("aurora");
    container.classList.remove("snowman");
    container.classList.remove("dam");
    title.classList.remove("flower-ring");
    title.classList.remove("aurora");
    title.classList.remove("snowman");
    title.classList.remove("dam");
    soundCold.pause();
    soundLight.pause();
    soundMachine.pause();
    soundPiano.pause();
  })
  
  
 


 
 
});/*等網站的DOM都載入完後再執行*/





