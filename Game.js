const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restartButton');
let isXTurn = true;

function handleClick(e) {
    const cell = e.target;
    if (cell.classList.contains('x') || cell.classList.contains('o')) return;
    cell.classList.add(isXTurn ? 'x' : 'o');
    if (checkWin()) {
        setTimeout(() => alert(`${isXTurn ? 'X' : 'O'} wins!`), 10);
    } else if ([...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'))) {
        setTimeout(() => alert('It\'s a draw!'), 10);
    }
    isXTurn = !isXTurn;
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a].classList.contains(isXTurn ? 'x' : 'o') &&
               cells[a].classList.contains(cells[b].classList[1]) &&
               cells[a].classList.contains(cells[c].classList[1]);
    });
}

function restartGame() {
    cells.forEach(cell => cell.classList.remove('x', 'o'));
    isXTurn = true;
}

board.addEventListener('click', handleClick);
restartButton.addEventListener('click', restartGame);
