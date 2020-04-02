// 请模拟双色球开奖，从1~33个数字中，随机选择6个，不能重复。输出不需要排序
// 结果数组
var result_arr = [];

// 如果结果数组长度小于6，就一直循环
while (result_arr.length < 6) {
    // 1-33随机生成一个数字
    var a = parseInt(Math.random() * 33 + 1);
    // 生成的数字不在结果数组中
    if (!result_arr.includes(a)) {
        // 推进去
        result_arr.push(a);
    }
}
console.log(result_arr);