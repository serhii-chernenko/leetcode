// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const len = nums.length;
    let i = 0;

    for (let index = 0; i < len; index++, i++) {
        if (nums[index] !== 0) continue;

        nums.splice(index, 1);
        nums.push(0);
        index--;
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
