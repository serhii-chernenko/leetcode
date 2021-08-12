// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const result = [];
    let hasResult = false;

    for (let index = 0; index < nums.length - 1; index++) {
        if (hasResult) break;

        for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
            if (nums[index] + nums[nextIndex] !== target) continue;

            result.push(index, nextIndex);
            hasResult = true;
            break;
        }
    }

    return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
