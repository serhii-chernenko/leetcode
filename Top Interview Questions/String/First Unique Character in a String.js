// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length === 1) return 0;

    const memo = {};

    for (let i = 0; i < s.length; i++) {
        memo[s[i]] = memo[s[i]] === undefined ? 1 : memo[s[i]] + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]] === 1) return i;
    }

    return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1
console.log(firstUniqChar('z')); // 0
console.log(firstUniqChar('aadadaad')); // -1
