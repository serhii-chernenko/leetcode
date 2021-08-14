// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const arr = [...x.toString()].reverse();

    for (const [index, value] of arr.entries()) {
        const num = parseInt(value);

        if (num <= 0) continue;

        arr.splice(0, index);
        break;
    }

    const number = parseInt(arr.join(''));
    const resultNumber = x < 0 ? -number : number;

    if (resultNumber < -(2 ** 31) || resultNumber > 2 ** 31 - 1) return 0;

    return resultNumber;
};

// console.log(reverse(123)); // 321
// console.log(reverse(-123)); // -321
// console.log(reverse(120)); // 21
// console.log(reverse(0)); // 0
console.log(reverse(1534236469)); // 0
