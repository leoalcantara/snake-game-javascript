let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let box = 32;

function createBackground() {
  context.fillStyle = "#A9F5BC";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

createBackground();
