// sort()内置的排序方法
var arr = [5, 7, 3, 8, 6, 2];
// arr.sort();
arr.sort(function (a, b) {
    return a - b;//正序
    return b - a;//倒序
})
console.log(arr);