// 4. 游泳比赛六个评委打分分别为39、45、42、44、51和48，最终得分计算方法是：去掉一个最高分、去掉一个最低分，剩下4个数字取平均。请问这个选手最终得分是多少？
// 使用数组
var arr = [39, 45, 42, 44, 51, 58];
var min = arr[0];
var max = arr[0];
var sum = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    } else if (arr[i] < min) {
        min = arr[i];
    }
    sum += arr[i];
}
var fen = (sum - max - min) / (arr.length - 2);
console.log(max);
console.log(min);
console.log(sum);
console.log(fen);
