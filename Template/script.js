// ========================================
// 🎯 CONSTANTS
// ========================================

// All three maze layouts - each is a 20x20 grid
// W = Wall, P = Path, T = Trap, X = Teleporter, G = Goal
const MAZE_POOL = [
  // Maze 1 - Classic maze with multiple paths
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

  // Maze 2 - Spiral pattern with center goal
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

  // Maze 3 - Grid pattern with scattered traps
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

// Teleporter pairs - when you step on position [x,y], you go to the destination
const TELEPORT_MAP = {
  "15,4": [12, 12],   // Teleporter 1 ⇄ Teleporter 2
  "12,12": [15, 4],
  "16,3": [11, 18],   // Teleporter 3 ⇄ Teleporter 4
  "11,18": [16, 3],
  "10,18": [18, 4],   // Teleporter 5 ⇄ Teleporter 6
  "18,4": [10, 18],
};

// Game settings
const INITIAL_TIME = 30;              // Seconds per game
const REPEAT_WARNING_THRESHOLD = 7;   // Show hint after this many same-direction moves


// ========================================
// 📊 STATE VARIABLES
// ========================================

let maze = [];                  // Current maze grid (working copy)
let playerX = 1;                // Player column position
let playerY = 1;                // Player row position
let gameEnded = false;          // Is game over?
let justTeleported = false;     // Just used teleporter? (prevents re-teleport)
let currentMazeIndex = 0;       // Which maze are we playing? (0, 1, or 2)
let timeLeft = INITIAL_TIME;    // Countdown timer value
let timerInterval = null;       // Timer reference for stopping/starting

// Movement tracking
let lastDirection = null;       // Last direction player moved
let repeatCount = 0;            // How many times moved same direction
let repeatMessageTimeout = null; // Timeout for clearing hint message


// ========================================
// 🚀 SETUP
// ========================================

/**
 * Initializes/restarts the game
 * Called on page load and when reset button is clicked
 */
function setup() {
  // Copy selected maze from pool (don't modify original)
  const selectedMaze = MAZE_POOL[currentMazeIndex];
  maze = selectedMaze.map(row => [...row]);
  
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
  render();
}

/**
 * Starts the countdown timer
 */
function startTimer() {
  timeLeft = INITIAL_TIME;
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


// ========================================
// 🎨 RENDER
// ========================================

/**
 * Draws the entire maze to the screen
 */
function render() {
  const mazeContainer = document.getElementById("maze");
  mazeContainer.innerHTML = "";

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Style cell based on tile type and player position
      applyCellStyling(cell, maze[y][x], x, y);

      mazeContainer.appendChild(cell);
    }
  }
}

/**
 * Applies styling to a single maze cell
 */
function applyCellStyling(cell, tileType, x, y) {
  // Player overrides tile display
  if (x === playerX && y === playerY) {
    cell.classList.add("player");
    cell.textContent = "👤";
    return;
  }

  // Style based on tile type
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
// 🎮 INPUT HANDLING
// ========================================

/**
 * Handles keyboard input for movement and teleporting
 */
document.addEventListener("keydown", (e) => {
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
    render();
    checkOutcome();
  }
});


// ========================================
// 🧮 GAME LOGIC FUNCTIONS
// ========================================

/**
 * Calculates new position based on key pressed
 * Returns: { x, y, direction }
 */
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

/**
 * Checks if position is valid (in bounds and not a wall)
 */
function isValidMove(x, y) {
  return (
    y >= 0 && y < maze.length &&
    x >= 0 && x < maze[0].length &&
    maze[y][x] !== "W"
  );
}

/**
 * Teleports player to paired destination
 */
function handleTeleport() {
  const currentPosKey = `${playerX},${playerY}`;
  const currentTile = maze[playerY][playerX];

  if (currentTile === "X" && TELEPORT_MAP[currentPosKey]) {
    justTeleported = true;
    const [destX, destY] = TELEPORT_MAP[currentPosKey];
    
    playerX = destX;
    playerY = destY;
    
    document.getElementById("outcome").textContent = `👀 Teleported to (${destX}, ${destY})! 👀`;
    render();
    checkOutcome();
  }
}

/**
 * Checks what tile player is on and updates game state
 */
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

  // Teleporter prompt
  if (currentTile === "X" && !justTeleported) {
    outcome.textContent = "🕳 Click spacebar to teleport! 🕳";
    return;
  }

  // Repeat movement warning
  if (!justTeleported && repeatCount > REPEAT_WARNING_THRESHOLD) {
    outcome.textContent = "😅 Still going that way? Try exploring!";
    return;
  }

  // Clear message
  if (!justTeleported) {
    outcome.textContent = "";
  }
}

/**
 * Tracks repeated movements in same direction
 */
function trackRepeatedMovement(direction) {
  if (direction === lastDirection) {
    repeatCount++;
    
    if (repeatCount > REPEAT_WARNING_THRESHOLD) {
      const outcome = document.getElementById("outcome");
      outcome.textContent = "😅 Still going that way? Try exploring!";
      
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


// ========================================
// 🛠️ UTILITY FUNCTIONS
// ========================================

/**
 * Updates timer display in UI
 */
function updateTimerDisplay() {
  document.getElementById("timer").textContent = `⏳ Time left: ${timeLeft}s`;
}


// ========================================
// 🎛️ EVENT LISTENERS
// ========================================

/**
 * Reset button - restarts game or loads next maze
 */
document.getElementById("resetBtn").addEventListener("click", () => {
  if (gameEnded) {
    // Cycle to next maze
    currentMazeIndex = (currentMazeIndex + 1) % MAZE_POOL.length;
  }
  setup();
});


// ========================================
// ▶️ START GAME
// ========================================

setup();