// 递归实现深克隆
var arr1 = [1, 2, 3, 4, { 'm': 5, 'n': [6, 7, 8] }, 9];

function deepClone(o) {
    if (Array.isArray(o)) {
        var result = [];
        for (let i = 0; i < o.length; i++) {
            result.push(deepClone(o[i]));
        }
    } else if (typeof o == 'object') {
        var result = {};
        for (var k in o) {
            result[k] = deepClone(o[k]);
        }
    } else {
        var result = o;
    }
    return result;
}
var arr2 = deepClone(arr1);
console.log(arr2);
console.log(arr1 == arr2);
console.log(arr1[4] == arr2[4]);
