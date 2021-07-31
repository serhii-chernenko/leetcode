// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const memo = new Set();

    for (const num of nums) {
        if (memo.has(num)) return true;

        memo.add(num);
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
