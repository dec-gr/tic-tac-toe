// Module
const gameBoard = (() => {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const resetBoard = () => {
    for (i = 0; i <= 2; i++) {
      board[i] = board[i].map((value) => "");
    }
  };

  const displayBoard = () => {
    resetBoard();

    for (i = 0; i <= 2; i++) {
      for (j = 0; j <= 2; j++) {
        const cell = document.getElementById(`${i}-${j}`);
        cell.textContent = board[i][j];
      }
    }
  };

  const setBoard = (i, j, marker) => {
    const cell = document.getElementById(`${i}-${j}`);
    board[i][j] = marker;
    cell.textContent = marker;
    return checkGameState();
  };

  const checkGameState = () => {
    // Check Rows
    for (i = 0; i <= 2; i++) {
      if (board[i].every((v) => v !== "" && v === board[i][0])) {
        return "Game Over";
      }
    }

    // Check Columns
    for (i = 0; i <= 2; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== ""
      ) {
        return "Game Over";
      }
    }

    // Check diagonals
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ""
    ) {
      return "Game Over";
    }

    if (
      board[2][0] === board[1][1] &&
      board[1][1] === board[0][2] &&
      board[2][0] !== ""
    ) {
      return "Game Over";
    }

    // Check Tie
    if (board.flat().every((v) => v !== "")) {
      return "Tie";
    }
  };

  // Check gameboard for winner
  // return player (or symbol) or tie

  return {
    displayBoard,
    setBoard,
    checkGameState,
    board,
  };
})();

// Factory
const player = (name, marker) => {
  const displayMarker = () => console.log(marker);
  return { name, displayMarker, marker };
};

// Module
const gameFlow = (() => {
  //startGame
  let gameOver = false;

  //CreatePlayer1
  player1 = player(prompt("Player 1 Name: "), "X");

  //CreatePlayer2
  player2 = player(prompt("Player 2 Name: "), "O");

  let currentPlayer = player1;

  //DisplayBoard
  gameBoard.displayBoard();

  const resetGame = () => {
    gameOver = false;
    currentPlayer = player1;
    gameBoard.displayBoard();
  };

  const endGame = (result) => {
    if (result === "Game Over") {
      alert(`${currentPlayer.name} wins!`);
      gameOver = true;
    } else if (result === "Tie") {
      alert(`Tie`);
    }
  };

  const tempFunction = (e) => {
    if (gameOver) {
      alert("Game is already over.");
      return;
    } else if (e.textContent != "") {
      return;
    } else {
      console.log(e);
      let [i, j] = e.id.split("-");
      let result = gameBoard.setBoard(i, j, currentPlayer.marker);

      if (result) {
        endGame(result);
      } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
      }
    }
  };

  const gameCells = document.querySelectorAll(".game-cell");
  gameCells.forEach((cell) => {
    cell.addEventListener("click", function () {
      let that = this;
      tempFunction(that);
    });
  });

  const resetBtn = document.getElementById("reset-button");
  resetBtn.addEventListener("click", resetGame);

  //   document.getElementById("1-1").addEventListener("click", function () {
  //     let that = this;
  //     tempFunction(that);
  //   });

  //CreatePlayer2

  return { resetGame };
})();
