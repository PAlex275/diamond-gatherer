const canvas = document.getElementById("canvasId");
const context = canvas.getContext('2d');

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;



const geoerge = new Image();
geoerge.src = 'assets/george.png'
const GEORGE_WIDTH = 40;
const GEORGE_HEIGHT = 45;
let georgeX = 100;
let georgeY = 100;
geoerge.onload = () => {
    context.drawImage(geoerge, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT)
}

const mario = new Image();
mario.src = 'assets/mario.png'
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;
let marioX = 0;
let marioY = 0;
mario.onload = () => {
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
}


const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this);
    context.fillStyle = "green";
    context.fillRect(480, 20, 40, 20);
});

document.addEventListener("keydown", function(event) {
    context.clearRect(0, 0, CANVAS_WIDTH , CANVAS_HEIGHT);;
    switch (event.key) {
        case 'ArrowUp':
            {
                georgeY -= 10;
                break;
            }
        case 'ArrowDown':
            {
                georgeY += 10;
                break;
            }
        case 'ArrowLeft':
            {
                georgeX -= 10;
                break;
            }
        case 'ArrowRight':
            {
                georgeX += 10;
                break;
            }
        case 'A':
        case 'a':
            {
                marioX -= 10;
                break;
            }
        case 'D':
        case 'd':
            {
                marioX += 10;
                break;
            }
        case 'W':
        case 'w':
            {
                marioY -= 10;
                break;
            }
        case 'S':
        case 's':
            {
                marioY += 10;
                break;
            }
    }

    if (georgeX < 0) {
        georgeX = 0;
    } else if (georgeX > (CANVAS_WIDTH - GEORGE_WIDTH)) {
        georgeX = CANVAS_WIDTH - GEORGE_WIDTH;
    }

    if (georgeY < 0) {
        georgeY = 0;
    } else if (georgeY > (CANVAS_HEIGHT - GEORGE_HEIGHT)) {
        georgeY = CANVAS_HEIGHT - GEORGE_HEIGHT;
    }

    if (marioX < 0) {
        marioX = 0;
    } else if (marioX > (CANVAS_WIDTH - MARIO_WIDTH)) {
        marioX = CANVAS_WIDTH - MARIO_WIDTH;
    }

    if (marioY < 0) {
        marioY = 0;
    } else if (marioY > (CANVAS_HEIGHT - MARIO_HEIGHT)) {
        marioY = CANVAS_HEIGHT - MARIO_HEIGHT;
    }


    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    context.drawImage(geoerge, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT)
});


