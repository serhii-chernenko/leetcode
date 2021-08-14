// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let len = matrix.length - 1;

        for (let j = matrix.length - 1; j >= 0; j--) {
            const current = matrix[i].pop();

            matrix[len].unshift(current);
            len--;
        }
    }

    return matrix;
};

console.log(
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
); // [[7,4,1],[8,5,2],[9,6,3]]

console.log(
    rotate([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
    ])
); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

console.log(rotate([[1]])); // [[1]]

console.log(
    rotate([
        [1, 2],
        [3, 4]
    ])
); // [[3,1],[4,2]]
