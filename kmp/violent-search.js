/*
*实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。
*/


let string = "sdfabasdlfsaslfjslkadadfjlabab";
let searchString = "s";

function index(string, searchString) {
    let i = 0,
        j = 0;
    while (i <= (string.length - 1) && j <= (searchString.length - 1)) {
        if (string[i] === searchString[j]) {
            i++;
            j++;
        } else {
            // 这里不仅回溯字符串，也回溯匹配字符串。
            i = i - j + 1;
            j = 0;
        }
    }
    if (j > searchString.length - 1) {
        return i - searchString.length;
    }
    return -1;
}

console.log(index(string, searchString));
console.log(string.indexOf(searchString));