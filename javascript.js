// Module
const gameBoard = (() => {
  let board = [
    ["X", "O", ""],
    ["", "O", "O"],
    ["X", "O", "X"],
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
    cell.textContent = marker;
  };

  // Check gameboard for winner
  // return player (or symbol) or tie

  // Add to gameboard
  // (Position + Player)

  return {
    displayBoard,
    setBoard,
  };
})();

// Factory
const player = (name, marker) => {
  const displayMarker = () => console.log(marker);
  return { name, displayMarker };
};

// Module
const gameFlow = () => {};
