// 数组的去重
var arr = [1, 1, 2, 2, 3, 3, 3, 4, 5, 4];
// 结果数组
var result_arr = [];

for (var i = 0; i < arr.length; i++) {
    // 如果结果数组里面不存在遍历的这项，就推入
    if (!result_arr.includes(arr[i])) {
        result_arr.push(arr[i]);
    }
}
console.log(result_arr);