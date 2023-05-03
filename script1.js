
// Game js.....
const hole = document.getElementById("hole");
let text = document.getElementById("text");
let game = document.getElementById("game");
let result = document.getElementById("result");

let hm = document.getElementById("hm");
let restart = document.getElementById("restart");

let jumping = 0;
let score = 0;

// Animation -->
hole.addEventListener("animationiteration", hol);

function hol() {
  var random = - ((Math.random() * 200) + 100);
  hole.style.top = random + "px";
};


// Fall and game over -->
// var fall = setInterval(function () {
//   var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
//   if (jumping == 0) { bird.style.top = (birdTop + 2) + "px" };

//   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//   var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
//   var hTop = (300 + holeTop);

//   if ((birdTop > 265) || ((blockLeft < 33) && (blockLeft > -42) && ((birdTop < hTop) || (birdTop > hTop + 100)))) {
//     result.style.display = "block";
//     text.innerText = `Score : ${score}`;
//     game.style.display = "none";
//     score = 0;

//   }

// }, 10)

// Jump---
function jump() {
  jumping = 1;

  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (birdTop > 6) { bird.style.top = (birdTop - 60) + "px" };

  setTimeout(function () {
    jumping = 0;
  }, 100);
}

window.addEventListener("keydown", jump);

let fly = document.getElementById("fly");
fly.addEventListener("click", jump);


// result menu--->

hm.addEventListener('click', function start() {
  console.log("Home Manu button is working");
  window.open('index.html', '_self');


});

restart.addEventListener('click', function start() {
  console.log("Restart button is working");
  window.open('game.html', '_self');


});





// Screen fit....
const gameContainer = document.querySelector(".game-container");
const game1 = document.querySelector(".game");

function setGameSize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const gameWidth = game1.offsetWidth;
  const gameHeight = game1.offsetHeight;
  const widthRatio = windowWidth / gameWidth;
  const heightRatio = windowHeight / gameHeight;
  const scale = Math.min(widthRatio, heightRatio);
  game1.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", setGameSize);

setGameSize();