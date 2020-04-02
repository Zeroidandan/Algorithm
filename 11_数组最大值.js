// 数组最大值
var arr = [0, 12, 23, 34, 45, 56, 67];

// 遍历，冒泡
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             var num = arr[i];
//             arr[i] = arr[j];
//             arr[j] = num;
//         }
//     }
// }
// console.log(arr[0]);

var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);
