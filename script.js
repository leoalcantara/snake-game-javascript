let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

function createBackground() {
  context.fillStyle = "#A9F5BC";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "#243B0B";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

createBackground();
createSnake();
