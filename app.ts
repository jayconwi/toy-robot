const grid: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("grid");
const gridWidth: number = grid.width;
const gridHeight: number = grid.height;
const unit: number = grid.width / 5;

const ctx: CanvasRenderingContext2D = grid.getContext("2d");
ctx.strokeStyle = "gray";
ctx.fillStyle = "black"; 

const moveList: Array<string> = new Array<string>("NORTH", "EAST", "SOUTH", "WEST");
let currentPositionX: number = 0;
let currentPositionY: number = 0;
let currentDirection: number = 0;
let robotPlaced: boolean = false;

/** Draw 5x5 table with grid lines in the canvas 
 * X,Y position starts at 0,0 and maximum of 4,4 */ 
const drawTable = () => {
    ctx.beginPath();

    // Draw line X
    for (let x: number = unit; x < gridWidth; x += unit) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, gridHeight);
    }

    // Draw line Y
    for (let y: number = unit; y < gridHeight; y+= unit) {
        ctx.moveTo(0, y);
        ctx.lineTo(gridWidth, y);
    }

    ctx.stroke();
}

/** Draw robot pointing to the current direction
 * Robot is represented as a triangle */
const drawRobot = () => {
    const x: number = currentPositionX * unit;
    const y: number = currentPositionY * unit;

    const path = new Path2D();
    if (currentDirection == 0) {
        path.moveTo(x + 25, y + 5);
        path.lineTo(x + 35, y + 45);
        path.lineTo(x + 15, y + 45);
    }
    else if (currentDirection == 1) {
        path.moveTo(x + 45, y + 25);
        path.lineTo(x + 5, y + 35);
        path.lineTo(x + 5, y + 15);
    }
    else if (currentDirection == 2) {
        path.moveTo(x + 25, y + 45);
        path.lineTo(x + 15, y + 5);
        path.lineTo(x + 35, y + 5);
    }
    else if (currentDirection == 3) {
        path.moveTo(x + 5, y + 25);
        path.lineTo(x + 45, y + 15);
        path.lineTo(x + 45, y + 35);
    }
   
    ctx.fill(path);
}

// Update canvas view
const drawUpdate = () => {
    ctx.clearRect(0, 0, gridWidth, gridHeight);
    drawTable();
    if (robotPlaced) 
        drawRobot();
}

// Initializes the robot in the canvas
const place = () => {
    robotPlaced = true;
    drawUpdate();
    console.log("Command: PLACE, X, Y, DIRECTION - Success");
}

// Moves the robot based on current direction
const move = () => {
    if (!robotPlaced) { 
        console.log("Command: MOVE - Failed");
        return; 
    }

    if (currentDirection == 0 && currentPositionY > 0) 
        currentPositionY -= 1;
    else if (currentDirection == 1 && currentPositionX < (gridWidth / unit - 1)) 
        currentPositionX += 1;
    else if (currentDirection == 2 && currentPositionY < (gridHeight / unit - 1)) 
        currentPositionY += 1;
    else if (currentDirection == 3 && currentPositionX > 0) 
        currentPositionX -= 1;
    else {
        console.log("Command: MOVE - Failed");
        return; 
    }
    
    drawUpdate();
    console.log("Command: MOVE - Success");
}

// Changes the direction counter clockwise
const left = () => {    
    if (!robotPlaced) { 
        console.log("Command: LEFT - Failed");
        return; 
    }

    if (currentDirection == 0) 
        currentDirection = moveList.length - 1;
    else 
        currentDirection--;

    drawUpdate();
    console.log("Command: LEFT - Success");
}

// Changes the direction clockwise
const right = () => {
    if (!robotPlaced) { 
        console.log("Command: RIGHT - Failed");
        return; 
    }

    if (currentDirection == moveList.length - 1) 
        currentDirection = 0;
    else 
        currentDirection++;
        
    drawUpdate();
    console.log("Command: RIGHT - Success");
}

// Displays the current direction and position of the robot on the table
const report = () => {
    if (!robotPlaced) { 
        console.log("Command: RIGHT - Failed");
        return; 
    }

    alert(`X: ${currentPositionX}\n\rY: ${currentPositionY}\n\rDIRECTION: ${moveList[currentDirection]}`);
    console.log("Command: REPORT - Success");
}

drawUpdate();

// Mount events
document
    .querySelector("#place")
    .addEventListener('click', () => {
        const direction: HTMLSelectElement = document.querySelector("#direction");
        currentDirection = moveList.indexOf(direction.value);

        const coords: HTMLInputElement = document.querySelector("#coords");
        currentPositionX = parseInt(coords.value.trim().split(',')[0]);
        currentPositionY = parseInt(coords.value.trim().split(',')[1]);

        place();
    });
document.querySelector("#move").addEventListener('click', move);
document.querySelector("#left").addEventListener('click', left);
document.querySelector("#right").addEventListener('click', right);
document.querySelector("#report").addEventListener('click', report);