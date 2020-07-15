let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let box = 32;
let speed = 500;
let score = 0;
let level = 1;

let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

function createBackground() {
  context.fillStyle = "#AACC99";
  context.fillRect(0, 0, 16 * box, 16 * box);  
}

function createSnake() {
  for (i = 0; i < snake.length; i++) {
    context.lineWidth = 2;
    context.fillStyle = "#2E8B57";
    context.strokeStyle = "#000";    
    context.fillRect(snake[i].x, snake[i].y, box, box);
    context.strokeRect(snake[i].x, snake[i].y, box, box);
  }
}

function drawFood() {
  context.lineWidth = 2;
  context.fillStyle = "#ff8080";
  context.strokeStyle = "#A52A2A";
  context.fillRect(food.x, food.y, box, box);
  context.strokeRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 40 && direction != "up") direction = "down";
  //console.log(event.keyCode, direction);
}

function startGame() {
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(game);
      alert("Game Over");
    }
  }

  createBackground();
  createSnake();
  drawFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "up") snakeY -= box;
  if (direction == "left") snakeX -= box;
  if (direction == "down") snakeY += box;

  if (snakeX != food.x || snakeY != food.y) {
    snake.pop();
    
  } else {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
    speed = speed -50;
    //setInterval.speed = setInterval.speed - 10;
    score ++;
    document.getElementById("score").innerHTML = "Score: " + score;
    if(score % 10 == 0){
      level ++;
      document.getElementById("level").innerHTML = "Level: " + level; 
    }
    console.log(score);
    // console.log(speed);
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}

let game = setInterval(startGame, speed);
