// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const memo = new Map();

    for (const num of nums) {
        memo.has(num) ? memo.set(num, memo.get(num) + 1) : memo.set(num, 1);
    }

    for (const [key, value] of memo.entries()) {
        if (value === 1) return key;
    }
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
