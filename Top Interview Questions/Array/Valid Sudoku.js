// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const period = '.';

    for (let i = 0; i < 9; i++) {
        const rows = new Set();
        const cols = new Set();
        const boxes = new Set();

        for (let j = 0; j < 9; j++) {
            const row = board[i][j];
            const col = board[j][i];
            const box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

            if (row !== period) {
                if (rows.has(row)) return false;

                rows.add(row);
            }

            if (col !== period) {
                if (cols.has(col)) return false;

                cols.add(col);
            }

            if (box !== period) {
                if (boxes.has(box)) return false;

                boxes.add(box);
            }
        }
    }

    return true;
};

console.log(
    isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ])
); // true

console.log(
    isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ])
); // false
