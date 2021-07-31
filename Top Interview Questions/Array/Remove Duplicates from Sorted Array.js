// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const memo = {};

    for (let index = 0; index < nums.length; index++) {
        if (memo[nums[index]]) {
            nums.splice(index, 1);
            --index;
            continue;
        }

        memo[nums[index]] = true;
    }

    return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
