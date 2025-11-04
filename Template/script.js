// ========================================
// CONSTANTS - things that stay the same
// ========================================

const mazePool = [ // A 3D array, an array of arrays of arrays
  // Maze 1
  [
    ["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
    ["W","P","P","P","W","P","P","P","P","P","P","P","P","P","P","P","P","P","T","W"],
    ["W","P","W","P","W","P","W","W","W","P","W","W","W","P","W","W","W","P","W","W"],
    ["W","P","W","P","P","P","W","P","P","P","W","P","P","P","W","P","P","P","W","W"],
    ["W","P","W","W","W","P","W","P","W","P","W","P","W","P","W","X","W","P","W","W"],
    ["W","P","P","P","W","P","P","P","W","P","W","P","W","P","P","P","W","P","P","W"],
    ["W","W","W","P","W","W","W","P","W","P","W","P","W","W","W","P","W","W","W","W"],
    ["W","P","W","P","P","P","W","P","W","W","W","P","W","P","P","P","P","P","P","W"],
    ["W","P","W","P","W","P","W","T","P","P","P","P","W","P","W","W","W","P","W","W"],
    ["W","P","W","W","W","W","W","P","W","W","W","W","W","P","W","P","W","P","W","W"],
    ["W","P","P","P","P","P","W","P","P","P","P","P","P","P","P","P","P","P","P","W"],
    ["W","W","W","W","W","P","W","W","W","P","W","W","W","W","W","W","W","W","P","W"],
    ["W","P","P","P","W","P","P","P","P","P","P","W","X","P","P","P","P","P","P","W"],
    ["W","P","W","P","W","P","W","W","W","P","W","W","W","P","W","W","W","P","W","W"],
    ["W","P","W","P","P","P","W","P","P","P","W","P","P","P","W","P","P","P","W","W"],
    ["W","P","W","W","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W"],
    ["W","P","P","P","W","P","P","P","W","P","P","P","W","P","P","P","W","P","P","W"],
    ["W","W","W","P","W","W","W","P","W","W","W","P","W","W","W","P","W","W","W","W"],
    ["W","P","P","P","P","P","W","P","P","P","P","P","W","T","P","P","P","P","G","W"],
    ["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
  ],

  // Maze 2
  [
    ["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
    ["W","P","P","P","P","P","P","P","P","P","P","P","P","P","P","P","P","P","P","W"],
    ["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","P","W"],
    ["W","P","P","P","P","P","P","P","P","P","P","P","P","P","P","P","X","W","P","W"],
    ["W","P","W","W","W","W","W","W","W","W","W","W","W","W","W","W","P","W","P","W"],
    ["W","P","W","P","P","P","P","P","P","P","P","P","P","P","P","W","P","W","P","W"],
    ["W","P","W","P","W","W","W","W","W","W","W","W","W","W","P","W","P","W","P","W"],
    ["W","P","W","P","W","P","P","P","P","P","P","P","P","W","P","W","P","W","P","W"],
    ["W","P","W","P","W","P","W","W","W","W","W","W","P","W","P","W","P","W","P","W"],
    ["W","P","W","P","W","P","W","P","P","P","P","W","P","W","P","W","P","W","P","W"],
    ["W","P","W","P","W","P","W","P","W","W","G","W","P","P","P","W","P","W","P","W"],
    ["W","P","W","P","W","P","W","P","W","W","W","W","P","W","P","W","P","W","P","W"],
    ["W","P","W","P","W","P","W","P","P","P","P","P","P","W","P","W","P","W","P","W"],
    ["W","P","W","P","W","P","W","W","W","W","W","W","W","W","T","W","P","W","P","W"],
    ["W","P","W","P","W","P","P","P","P","P","P","P","P","P","P","W","P","W","P","W"],
    ["W","P","W","P","W","W","W","W","W","W","W","W","W","W","W","W","P","W","P","W"],
    ["W","P","W","P","P","P","P","P","P","P","P","P","P","P","P","P","P","W","P","W"],
    ["W","P","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","P","W"],
    ["W","P","P","P","P","P","T","P","P","P","P","X","P","P","P","P","P","P","P","W"],
    ["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
  ],

  // Maze 3
  [
    ["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
    ["W","P","P","P","P","P","W","P","P","P","P","P","W","P","P","W","P","P","G","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","T","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","X","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","P","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W"],
    ["W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","P","W","W"],
    ["W","P","W","T","W","P","W","P","W","T","W","P","W","P","W","T","W","P","P","W"],
    ["W","P","W","W","W","P","W","P","W","W","W","P","W","P","W","P","W","P","P","W"],
    ["W","P","P","W","P","P","P","P","T","W","X","P","P","P","P","P","P","P","P","W"],
    ["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
  ]
];

// Teleport locations, when you step on position [x,y], you go to position [x,y]
// An object
const teleportLocations = {
  "15,4": [12, 12],   // Teleporter 1 ⇄ Teleporter 2
  "12,12": [15, 4],
  "16,3": [11, 18],   // Teleporter 3 ⇄ Teleporter 4
  "11,18": [16, 3],
  "10,18": [18, 4],   // Teleporter 5 ⇄ Teleporter 6
  "18,4": [10, 18],
};

const startTime = 30;              // Seconds per game
const maxSameDirectionMoves = 5;   // Show message after this many same-direction moves

// ========================================
// STATE VARIABLES - variables that change over time
// ========================================

let maze = [];                  // Stores the current maze grid
let playerX = 1;                // Tracks the playershorizontal position (at start)
let playerY = 1;                // Tracks the players vertical position (at start)
let gameEnded = false;          // Boolean tracking game state
let justTeleported = false;     // Boolean that prevents re-triggering message function
let currentMazeIndex = 0;       // Tracks which maze from the pool is active (0, 1, or 2)
let timeLeft = startTime;       // Remaining time in the countdown (30s at start)
let timerInterval = null;       // Reference to the timer interval (stop or reset)
let lastDirection = null;       // Stores the most recent movement direction
let repeatCount = 0;            // Tracks how many times the player moved in the same direction
let repeatMessageTimeout = null; // Reference to a timeout that clears the hint message


// ========================================
// SETUP
// ========================================

// Calls function (runs the code)
function setup() {
  const selectedMaze = mazePool[currentMazeIndex]; // Selects maze index from pool (0 from the start)
  maze = selectedMaze.map(row => [...row]); // Makes a fresh copy of the maze row by row (go through each row)
  
  // Reset player to starting position when restarting
  playerX = 1;
  playerY = 1;
  
  // Clear game state, resetting bolean
  gameEnded = false;
  justTeleported = false;
  // Clearing message from previous game (html outcome)
  document.getElementById("outcome").textContent = "";
  
  // Stop old timer, start new one
  clearInterval(timerInterval); // Built in function in javascript (started by setInterval)
  startTimer(); // My own function
  
  // Draw the maze
  showMaze();
}

// ========================================
// DISPLAY MAZE
// ========================================

function showMaze() {
  const mazeContainer = document.getElementById("maze"); // Find the HTML element with id="maze"
  mazeContainer.innerHTML = ""; // Clears out everything  inside that <div> 

  for (let y = 0; y < maze.length; y++) { // A for loop through each vertical row (top to bottom)
    for (let x = 0; x < maze[y].length; x++) { // A for loop through each tile in the current row (left to right)
      const cell = document.createElement("div"); // Creates a new div for every cell
      cell.classList.add("cell"); // Connects the css to the new html div 

      // Calling function to style a specific cell
      cellStyling(cell, maze[y][x], x, y); // cell=div, maze[y][x] = what cell, x,y = psoition

      mazeContainer.appendChild(cell); // Adding the cell to webpage, from js to DOM (webpage)
    }
  }
}

// Styling for each cell

function cellStyling(cell, tileType, x, y) { // (div, "W", "P", "T", etc., position)
  
  if (x === playerX && y === playerY) { // If tiles coordinates is the same as the players, its the players tile
    cell.classList.add("player"); // Add the class player, lets the css know
    cell.textContent = "👤"; // puts the emoji inside the tile
    return; // Stops the function, dont need to check for more
  }

  if (tileType === "W") { 
  cell.classList.add("wall"); // If tiletype is W, add the CSS class Wall to div

} else if (tileType === "G") { // If the tile is G
  cell.classList.add("goal"); // Add class goal to CSS
  cell.textContent = "🏁"; // Set the text inside the tile

} else if (tileType === "T") { // If the tile is T
  cell.classList.add("trap"); // Add class trap to CSS
  cell.textContent = "💣"; // Set the text inside tile

} else if (tileType === "X") { // If the tile is X
  cell.classList.add("teleporter"); // Add teleporter to css
  cell.textContent = "🕳"; // Set the text inside tile
}
}


// ========================================
// KEYBOARD MOVEMENT
// ========================================

function handleKeyPress(e) { // event object contains details about the key press
  if (gameEnded) return; // If game is over, ignore all keyboard input
  
  const key = e.key.toUpperCase(); // Converting all keys to uppercase (g and G moves left)

  // Spacebar = Teleport
  if (e.code === "Space") { // Checks which key was pressed, e.code = property of the keyboard event object
    e.preventDefault(); // Prevents the default behavior of spacebar, moving down
    handleTeleport(); // Calls function handleTeleports, moves the player to a different location
    return; // Stop the rest of the function from running after teleporting
  }


  const newPos = calculateNewPosition(key); // calculate new position based on what key was pressed
  if (!newPos.direction) return; // if key doesnt connect to a direction, do nothing

  if (!e.repeat) { // track repeated movement direction, but only on keypress not hold
    trackRepeatedMovement(newPos.direction); // how many times the player moves in the same direction
  }

  justTeleported = false; // reset teleport flag so normal movement logic applies

  // Move if valid
  if (isValidMove(newPos.x, newPos.y)) { // function that checks if the tile is allowed to move onto
    playerX = newPos.x; // move the player onto the tile
    playerY = newPos.y; // move the player onto the tile
    showMaze(); // redraw the maze with update 
    checkOutcome(); // checks what happened after the move
  }
}

function calculateNewPosition(key) { // defines a function with key as input
  let newX = playerX; // playerX is the current column the player is in, newx will be updated depending on left/right
  let newY = playerY; // playerY is the current row the player is in, newY will be updated depending on up/down
  let direction = null; // stores direction of movement, no direction yet

  if ("QWERTYUIOP".includes(key)) { // if the player presses a top row key
    newY--; // newY-- subtracts 1 from the row -> moves up the player one tile
    direction = "up"; // sets the direction to "up"

  } else if ("ASDFG".includes(key)) { // if the player presses a middle-left key
    newX--; // subtracts 1 from the column -> moves the player left one tile
    direction = "left"; // sets direction to left

  } else if ("HJKL".includes(key)) { // if the player presses a middle-right key
    newX++; // adds 1 to the column -> moves the player right one tile
    direction = "right"; // sets direction to right

  } else if ("ZXCVBNM".includes(key)) { // if the player presses bottom row keys
    newY++; // adds 1 to the row -> moves the player down one tile
    direction = "down"; // sets the direction to down
  }

  return { x: newX, y: newY, direction }; // returns the data of the last movement
}

// Checks if position is valid (in bounds and not a wall)
function isValidMove(x, y) {
  return ( // return if true or false
    y >= 0 && y < maze.length && // checks if y is inside the maze, vertically
    x >= 0 && x < maze[0].length && // checks if x is inside the maze, horizontally
    maze[y][x] !== "W" // checks if the player moves into the wall
  );
}

// Teleports player to paired destination
function handleTeleport() { // function is called when player presses spacebaar
  const currentPosKey = `${playerX},${playerY}`; // creates a string key based on players current position
  const currentTile = maze[playerY][playerX]; // this checks what kind of tile the player is standing on

  if (currentTile === "X" && teleportLocations[currentPosKey]) { // is the player standing on teleporter tile and is there a desination?
    justTeleported = true; // sets the flag sto say the player just teleported
    const [destX, destY] = teleportLocations[currentPosKey]; // gets the destination coordinates from teleportmap
    
    playerX = destX; // moves the player
    playerY = destY; // moves the player
    
    document.getElementById("outcome").textContent = `👀 Teleported to (${destX}, ${destY})! 👀`; // sets a message to outcome
    showMaze(); // redraw the maze
    checkOutcome(); // what happends after teleporting
  }
}

// ========================================
// FUNCTIONS
// ========================================

//Checks what tile player is on and updates game state
function checkOutcome() {
  const outcome = document.getElementById("outcome"); // Get the message display area
  const currentTile = maze[playerY][playerX]; // Get the type of tile the player is on

  // Win condition
  if (currentTile === "G") {
    outcome.textContent = "🪩 You reached the goal! 🪩"; // SHow win message
    gameEnded = true; // Stop the game
    clearInterval(timerInterval); // Stop the countdown timer
    return; // Exit the function
  }

  // Lose condition
  if (currentTile === "T") {
    outcome.textContent = "💀 You stepped on a trap! 💀"; // Show lose message
    gameEnded = true; // Stop the game
    clearInterval(timerInterval); // Stop the countdown timer
    return; // Exit the function
  }

  // Teleporter
  if (currentTile === "X" && !justTeleported) {
    outcome.textContent = "🕳 Click spacebar to teleport! 🕳"; // Show message
    return; // Exit the function
  }

  // Repeat movement
  if (!justTeleported && repeatCount > maxSameDirectionMoves) {
    outcome.textContent = "💨 Try HOLDING the key to move quicker! 💨"; // Show messege
    return; // Exit function
  }

  // Clear message
  if (!justTeleported) {
    outcome.textContent = ""; // remove any leftover message
  }
}

//Tracks repeated movements in same direction

function trackRepeatedMovement(direction) {
  if (direction === lastDirection) { // if the player presses the same direction again 
    repeatCount++; // increase the repeat counter by one
    
    if (repeatCount > maxSameDirectionMoves) { // if the player has pressed the same direction too many times
      const outcome = document.getElementById("outcome"); // get the message display area
      outcome.textContent = "💨 Try holding the key to move quicker! 💨"; // show message
      
      clearTimeout(repeatMessageTimeout); // cancel any previous message timeout
      repeatMessageTimeout = setTimeout(() => {
        outcome.textContent = ""; // clears message after 3 seconds
      }, 3000);
    }
  } else {
    repeatCount = 1; // reset counter for new direction
    lastDirection = direction;// update the last direction
  }
}

function startTimer() { // start the countdown timer
  timeLeft = startTime; // reset the timer to the starting value
  updateTimerDisplay(); // show initial time on screen

  timerInterval = setInterval(() => { // starts a repeated timer that runs every second
    timeLeft--; // decrease time by 1 second
    updateTimerDisplay(); // update the display

    if (timeLeft <= 0) { // if time runs out
      clearInterval(timerInterval); // stop the timer
      gameEnded = true; // mark the game as ended
      document.getElementById("outcome").textContent = "⏰ Time's up! You lost. ⏰"; // show message
    }
  }, 1000); // run every 1000 milliseconds, 1 second
}

function updateTimerDisplay() { // updates the timer display on screen
  document.getElementById("timer").textContent = `⏳ Time left: ${timeLeft}s`; // show remaining time
}


// ========================================
// EVENT LISTENERS
// ========================================

// Listen for keyboard input and run handleKeyPress when a key is pressed
document.addEventListener("keydown", handleKeyPress);

// Listen for clicks on reset button
document.getElementById("resetBtn").addEventListener("click", () => {
  if (gameEnded) {
// if game is over, switch to next maze
currentMazeIndex = (currentMazeIndex + 1) % mazePool.length;
}
setup(); // restart game with the new maze
});


// ========================================
// START GAME
// ========================================

setup(); // start the game when page loads