// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const result = [];

    for (const char of s) {
        if (char.match(/\w/) && char !== '_') result.push(char);
    }

    return result.join('').toLowerCase() === result.reverse().join('').toLowerCase();
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('ab_a')); // false
