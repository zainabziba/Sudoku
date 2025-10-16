document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('sudoku-board');
    const newGameBtn = document.getElementById('new-game');
    const solveBtn = document.getElementById('solve');
    const checkBtn = document.getElementById('check');

    let puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    function generateBoard(puzzle) {
        board.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if (puzzle[i][j] !== 0) {
                    cell.textContent = puzzle[i][j];
                    cell.classList.add('fixed');
                } else {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'number');
                    input.setAttribute('min', '1');
                    input.setAttribute('max', '9');
                    cell.appendChild(input);
                }
                board.appendChild(cell);
            }
        }
    }

    newGameBtn.addEventListener('click', () => {
        // TODO: Implement API call to get a new puzzle
        // For now, we just re-generate the same puzzle
        generateBoard(puzzle);
    });

    solveBtn.addEventListener('click', () => {
        // TODO: Implement Sudoku solving logic
        alert('Solve functionality not implemented yet.');
    });

    checkBtn.addEventListener('click', () => {
        // TODO: Implement checking logic
        alert('Check functionality not implemented yet.');
    });

    generateBoard(puzzle);
});