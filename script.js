let start = document.getElementById("start");
let guide = document.getElementById("guide");
let exit = document.getElementById("exit");
let home = document.getElementById("home");


// let game = document.getElementById("game");

start.addEventListener('click', function start() {
  console.log("Start button is working");
  if (confirm("Bird ko control krne ke liye aap fly button ka use kre aur use samne se aa rhi divaron se takrane se bchaye.")) {
    home.style.display = 'none';
    window.open('game.html', '_self');


  }

});

guide.addEventListener('click', function start() {
  console.log("Guide button is working");
  window.open('guide.html', '_self');

});

exit.addEventListener('click', function start() {
  if (confirm("Close Window?")) {
    close();
  }
});











// // Screen fit....
// const gameContainer = document.querySelector(".game-container");
// const game1 = document.querySelector(".game");

// function setGameSize() {
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const gameWidth = game1.offsetWidth;
//     const gameHeight = game1.offsetHeight;
//     const widthRatio = windowWidth / gameWidth;
//     const heightRatio = windowHeight / gameHeight;
//     const scale = Math.min(widthRatio, heightRatio);
//     game1.style.transform = `scale(${scale})`;
// }

// window.addEventListener("resize", setGameSize);

// setGameSize();