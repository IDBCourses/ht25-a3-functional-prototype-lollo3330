// ========================================
// CONSTANTS - things that stay the same
// ========================================

const mazePool = [
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
let playerX = 1;                // Tracks the playershorizontal position
let playerY = 1;                // Tracks the players vertical position
let gameEnded = false;          // indicate if the game has ended
let justTeleported = false;     // Flags if the player just used a teleporter (prevents re-teleport)
let currentMazeIndex = 0;       // Index of the active maze (1, 2, or 3)
let timeLeft = startTime;       // Remaining time in the countdown
let timerInterval = null;       // Reference to the active timer interval (stop or reset)
let lastDirection = null;       // Stores the most recent movement direction
let repeatCount = 0;            // Tracks how many times the player moved in the same direction
let repeatMessageTimeout = null; // Holds the timeout for message


// ========================================
// SETUP
// ========================================

function setup() {
  const selectedMaze = mazePool[currentMazeIndex]; // selects maze index from pool
  maze = selectedMaze.map(row => [...row]); // draws up the maze row by row
  
  // Reset player to starting position
  playerX = 1;
  playerY = 1;
  
  // Clear game state
  gameEnded = false;
  justTeleported = false;
  document.getElementById("outcome").textContent = "";
  
  // Start timer
  clearInterval(timerInterval);
  startTimer();
  
  // Draw the maze
  showMaze();
}

// ========================================
// DISPLAY MAZE
// ========================================

function showMaze() {
  const mazeContainer = document.getElementById("maze");
  mazeContainer.innerHTML = "";

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Style cell based on tile type and player position
      cellStyling(cell, maze[y][x], x, y);

      mazeContainer.appendChild(cell);
    }
  }
}

// Styling for each cell

function cellStyling(cell, tileType, x, y) {
  // Player overrides tile display
  if (x === playerX && y === playerY) {
    cell.classList.add("player");
    cell.textContent = "👤";
    return;
  }

  switch (tileType) {
    case "W": // Wall
      cell.classList.add("wall");
      break;
    case "G": // Goal
      cell.classList.add("goal");
      cell.textContent = "🏁";
      break;
    case "T": // Trap
      cell.classList.add("trap");
      cell.textContent = "💣";
      break;
    case "X": // Teleporter
      cell.classList.add("teleporter");
      cell.textContent = "🕳";
      break;
  }
}


// ========================================
// KEYBOARD MOVEMENT
// ========================================

function handleKeyPress(e) {
  if (gameEnded) return;
  
  const key = e.key.toUpperCase();

  // Spacebar = Teleport
  if (e.code === "Space") {
    e.preventDefault();
    handleTeleport();
    return;
  }

  // Calculate new position from keypress
  const newPos = calculateNewPosition(key);
  if (!newPos.direction) return; // Invalid key

  // Track repeated movements (only on new keypresses, not held keys)
  if (!e.repeat) {
    trackRepeatedMovement(newPos.direction);
  }

  // Reset teleport flag
  justTeleported = false;

  // Move if valid
  if (isValidMove(newPos.x, newPos.y)) {
    playerX = newPos.x;
    playerY = newPos.y;
    showMaze();
    checkOutcome();
  }
}

function calculateNewPosition(key) {
  let newX = playerX;
  let newY = playerY;
  let direction = null;

  if ("QWERTYUIOP".includes(key)) {
    newY--;
    direction = "up";
  } else if ("ASDFG".includes(key)) {
    newX--;
    direction = "left";
  } else if ("HJKL".includes(key)) {
    newX++;
    direction = "right";
  } else if ("ZXCVBNM".includes(key)) {
    newY++;
    direction = "down";
  }

  return { x: newX, y: newY, direction };
}

// Checks if position is valid (in bounds and not a wall)
function isValidMove(x, y) {
  return (
    y >= 0 && y < maze.length &&
    x >= 0 && x < maze[0].length &&
    maze[y][x] !== "W"
  );
}

// Teleports player to paired destination
function handleTeleport() {
  const currentPosKey = `${playerX},${playerY}`;
  const currentTile = maze[playerY][playerX];

  if (currentTile === "X" && teleportLocations[currentPosKey]) {
    justTeleported = true;
    const [destX, destY] = teleportLocations[currentPosKey];
    
    playerX = destX;
    playerY = destY;
    
    document.getElementById("outcome").textContent = `👀 Teleported to (${destX}, ${destY})! 👀`;
    showMaze();
    checkOutcome();
  }
}

// ========================================
// FUNCTIONS
// ========================================

//Checks what tile player is on and updates game state
function checkOutcome() {
  const outcome = document.getElementById("outcome");
  const currentTile = maze[playerY][playerX];

  // Win condition
  if (currentTile === "G") {
    outcome.textContent = "🪩 You reached the goal! 🪩";
    gameEnded = true;
    clearInterval(timerInterval);
    return;
  }

  // Lose condition
  if (currentTile === "T") {
    outcome.textContent = "💀 You stepped on a trap! 💀";
    gameEnded = true;
    clearInterval(timerInterval);
    return;
  }

  // Teleporter
  if (currentTile === "X" && !justTeleported) {
    outcome.textContent = "🕳 Click spacebar to teleport! 🕳";
    return;
  }

  // Repeat movement
  if (!justTeleported && repeatCount > maxSameDirectionMoves) {
    outcome.textContent = "💨 Try HOLDING the key to move quicker! 💨";
    return;
  }

  // Clear message
  if (!justTeleported) {
    outcome.textContent = "";
  }
}

//Tracks repeated movements in same direction

function trackRepeatedMovement(direction) {
  if (direction === lastDirection) {
    repeatCount++;
    
    if (repeatCount > maxSameDirectionMoves) {
      const outcome = document.getElementById("outcome");
      outcome.textContent = "Try holding the key to move quicker!";
      
      clearTimeout(repeatMessageTimeout);
      repeatMessageTimeout = setTimeout(() => {
        outcome.textContent = "";
      }, 3000);
    }
  } else {
    repeatCount = 1;
    lastDirection = direction;
  }
}

function startTimer() {
  timeLeft = startTime;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      gameEnded = true;
      document.getElementById("outcome").textContent = "⏰ Time's up! You lost. ⏰";
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById("timer").textContent = `⏳ Time left: ${timeLeft}s`;
}


// ========================================
// EVENT LISTENERS
// ========================================

// Keyboard controls
document.addEventListener("keydown", handleKeyPress);

// Reset button
document.getElementById("resetBtn").addEventListener("click", () => {
  if (gameEnded) {
// Cycle to next maze
currentMazeIndex = (currentMazeIndex + 1) % mazePool.length;
}
setup();
});


// ========================================
// START GAME
// ========================================

setup();