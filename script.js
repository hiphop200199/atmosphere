document.addEventListener("DOMContentLoaded", () => {
  let bubbles = document.querySelectorAll(".bubble");
  let aurora = document.getElementById("aurora");
  let snowman = document.getElementById("snowman");
  let flowerRing = document.getElementById("flowerRing");
  let dam = document.getElementById("dam");
  let elem = document.querySelector("p");
  elem.addEventListener("click", changeColor);
  function changeColor() {
    elem.style.color = `rgb(${Math.floor(Math.random() * 255)} ,${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    elem.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ,${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  };


  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener("click", changePosition);
    function changePosition() {
      bubbles[i].style.top = Math.floor(Math.random() * 1000) + 'px';
      bubbles[i].style.left = Math.floor(Math.random() * 1000) + 'px';
    }
  };
});/*等網站的DOM都載入完後再執行*/





