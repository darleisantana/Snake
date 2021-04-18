/* Background e tamanho */
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
/* Snake e tamanho */
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
/* Comidinha */
let food = {
    x:Math.floor(Math.random() * 15 + 1) * box,
    y:Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "black";
    context.fillRect(0,0,16 * box, 16 * box);
}
function criarcobriha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function drawFood(){
    context.fillStyle = "white";
    context.fillRect(food.x, food.y, box, box);
}
document.addEventListener('keydown', update);
function update(event){
    if(event.keycode == 37 &&  direction != "right") direction = "left";
    if(event.keycode == 38 &&  direction != "down") direction = "up";
    if(event.keycode == 39 &&  direction != "left") direction = "right";
    if(event.keycode == 40 &&  direction != "up") direction = "down";
}
function iniciarjogo(){
    /* condição para não sumir da tela quando chegar na borda */
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarcobriha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
        /* Movimento da cobrinha */
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        snakeX,
        snakeY
    }

    snake.unshift(newHead);
}
let jogo = setInterval(iniciarjogo, 100);