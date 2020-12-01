const canvas = document.getElementById("newCanvas");
const context = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const SQUARE_SIDE = 50;


const myButton = document.getElementById("randButton");


function drawSquare(x, y) {
    context.fillStyle = "cyan";
    context.fillRect(x, y, 50, 50);
};

function generateSquare() {

    let x = Math.floor(Math.random() * (CANVAS_WIDTH - SQUARE_SIDE));
    let y = Math.floor(Math.random() * (CANVAS_HEIGHT - SQUARE_SIDE));

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    drawSquare(x, y);
};

myButton.addEventListener("click", generateSquare);