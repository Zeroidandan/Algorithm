// 计算累加2的值
// 计算2+22+...222222222的结果
var sum = 0;
var num = 0;
for (var i = 1; i <= 9; i++) {
    //生成2，22，222
    num = num * 10 + 2;
    // 使生成的2，22累加
    sum += num;
    console.log(num);
}

console.log('2+22+...222222222的结果是：' + sum);