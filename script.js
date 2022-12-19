document.addEventListener("DOMContentLoaded", () => {
  let container=document.querySelector(".web-container");
  let aurora = document.getElementById("aurora");
  let snowman = document.getElementById("snowman");
  let flowerRing = document.getElementById("flowerRing");
  let dam = document.getElementById("dam");
  let title=document.getElementById("web-title");
  dam.addEventListener("click",function(){
    container.classList.add("dam");
    container.classList.remove("aurora");
    container.classList.remove("snowman");
    container.classList.remove("flower-ring");
    title.classList.add("dam");
    title.classList.remove("aurora");
    title.classList.remove("snowman");
    title.classList.remove("flower-ring");

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

  })
  
  
 


 
 
});/*等網站的DOM都載入完後再執行*/





