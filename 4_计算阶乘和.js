// 计算阶乘和
// 计算1阶乘+2阶乘+...9阶乘的结果

// 方法一：两层for循环
// var sum = 0;
// for (var i = 1; i <= 9; i++) {
//     var result = 1;
//     for (var j = 1; j <= i; j++) {
//         // 生成i的阶乘
//         result *= j;
//     }
//     console.log(i + '的阶乘是：' + result);
//     sum += result;
// }

// 方法二：一层for循环
// 3的阶乘就是2的阶乘再乘以3
var sum = 0;
var result = 1;
for (var i = 1; i <= 9; i++) {
    console.log(i + '的阶乘是：' + result);
    // 这个数字的阶乘就是result乘它自己
    result *= i;
    sum += result;
}

console.log('1!+2!+...9!的结果是：' + sum);