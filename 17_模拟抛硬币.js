// 模拟抛硬币一百万次，显示出现正面和反面的次数，并显示出占比。
var z = 0;
var f = 0;
var count = 1000000;

while (count--) {
    // 随机生成0-1之间的数
    var a = Math.random();
    // 四舍五入，大于0.5为正面，否则为反面
    if (a > 0.5) {
        z++;
    } else {
        f++;
    }
}
console.log(z, f, z / 1000000, f / 1000000);