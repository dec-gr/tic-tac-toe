// Module
const gameBoard = (() => {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const displayBoard = () => {
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
    console.log(board);
  };

  // Check gameboard for winner
  // return player (or symbol) or tie

  return {
    displayBoard,
    setBoard,
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

  //CreatePlayer1
  player1 = player("Jeff", "X");

  //CreatePlayer2
  player2 = player("Jess", "O");

  let currentPlayer = player1;

  //DisplayBoard
  gameBoard.displayBoard();

  const tempFunction = (e) => {
    if (e.textContent != "") return;
    console.log(e);
    let [i, j] = e.id.split("-");
    gameBoard.setBoard(i, j, currentPlayer.marker);
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const gameCells = document.querySelectorAll(".game-cell");
  gameCells.forEach((cell) => {
    cell.addEventListener("click", function () {
      let that = this;
      tempFunction(that);
    });
  });

  //   document.getElementById("1-1").addEventListener("click", function () {
  //     let that = this;
  //     tempFunction(that);
  //   });

  //CreatePlayer2
})();
