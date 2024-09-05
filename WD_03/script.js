let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

document.querySelectorAll('.cell').forEach(cell => {
	cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
	const cellIndex = event.target.dataset.cellIndex;
	if (gameOver || gameBoard[cellIndex] !== '') return;
	gameBoard[cellIndex] = currentPlayer;
	event.target.textContent = currentPlayer;
	checkWinner();
	switchPlayer();
}

function checkWinner() {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
    for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] && gameBoard[a] !== '') {
			gameOver = true;
			alert(`Player ${currentPlayer} wins!`);
			return;
		}
	}
}

function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}