// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const prefix = [];
    let notSame = false;

    for (let i = 0; i < strs[0].length; i++) {
        let nextSame = true;
        if (notSame) break;

        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                notSame = true;
                nextSame = false;
                break;
            }
        }

        if (nextSame) prefix.push(strs[0][i]);
    }

    return prefix.join('');
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // [empty string]
console.log(longestCommonPrefix(['aa', 'aa'])); // aa
