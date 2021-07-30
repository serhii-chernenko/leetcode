// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;

    for (const [index, price] of prices.entries()) {
        max += price > prices[index - 1] ? price - prices[index - 1] : 0;
    }

    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
