// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const longestArr = nums1.length > nums2.length ? nums1 : nums2;
    const shortestArr = nums1.length <= nums2.length ? nums1 : nums2;
    const memo = {};
    const resultMemo = {};
    const result = [];

    for (const num of longestArr) {
        if (!memo[num]) {
            memo[num] = 1;

            continue;
        }

        memo[num] = memo[num] + 1;
    }

    for (const num of shortestArr) {
        if (!memo[num]) continue;

        if (resultMemo[num]) {
            if (memo[num] > resultMemo[num]) {
                resultMemo[num] = resultMemo[num] + 1;
                result.push(num);
            }

            continue;
        }

        resultMemo[num] = 1;
        result.push(num);
    }

    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
console.log(intersect([3, 1, 2], [1, 1])); // [1]
