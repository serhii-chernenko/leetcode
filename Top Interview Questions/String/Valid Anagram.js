// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return [...s].sort().join('') === [...t].sort().join('');
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
