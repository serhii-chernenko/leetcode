// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let result = '1';

    while (n-- > 1) {
        let next = '';
        let count = 1;
        let current = result[0];

        for (let index = 1; index < result.length + 1; index++) {
            if (result[index] === current) {
                count += 1;
                continue;
            }

            next += `${count}${current}`;
            current = result[index];
            count = 1;
        }

        result = next;
    }

    return result;
};

console.log(countAndSay(1)); // '1'
console.log(countAndSay(4)); // '1211'
