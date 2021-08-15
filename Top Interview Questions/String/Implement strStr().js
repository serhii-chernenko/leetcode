// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return needle ? haystack.match(needle)?.index ?? -1 : 0;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('', '')); // 0
console.log(strStr('', 'a')); // -1
