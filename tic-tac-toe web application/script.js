const board = document.getElementById("board");
const status = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

// Create board
function createBoard() {
  board.innerHTML = "";
  gameState.forEach((val, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = index;
    cell.innerText = val;
    board.appendChild(cell);
  });
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || gameState[index] !== "") return;

  gameState[index] = currentPlayer;
  e.target.innerText = currentPlayer;

  if (checkWin()) {
    status.innerText = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (!gameState.includes("")) {
    status.innerText = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.innerText = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  return winningConditions.some(condition => {
    const [a, b, c] = condition;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  status.innerText = `Player ${currentPlayer}'s turn`;
  createBoard();
}

board.addEventListener("click", handleClick);
resetBtn.addEventListener("click", resetGame);

createBoard();
