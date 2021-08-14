// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const num = parseInt(s);

    if (isNaN(num)) return 0;
    if (num < -(2 ** 31)) return -(2 ** 31);
    if (num > 2 ** 31 - 1) return 2 ** 31 - 1;

    return num;
};

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi('  -0012a42')); // -12
console.log(myAtoi('      -11919730356x')); // -2147483648
console.log(myAtoi('   -115579378e25')); // -115579378
console.log(myAtoi('+11e530408314')); // 11
console.log(myAtoi('+-12')); // 0
console.log(myAtoi('         +114249g23041')); // 114249
