const map = new Map();
map.set("I", 1);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let num = 0;
    let prevChar = '';
    const arr = Array.from(s);
    arr.map((char) => {
        if ((prevChar === 'I' && (char === 'V' || char === 'X')) ||
            (prevChar === 'X' && (char === 'L' || char === 'C')) ||
            (prevChar === 'C' && (char === 'D' || char === 'M'))) {
            num += map.get(char) - 2 * map.get(prevChar);
        } else {
            num += map.get(char);
        }
        prevChar = char;
    });
    return num;
};

console.log(intToRoman('IV'));