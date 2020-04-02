// 第一题：判断45887是不是质数
var num = 45887;
for (var i = 1, sum = 0; i <= num; i++) {
    if (num % i == 0) {
        sum++;
    }
}

if (sum == 2) {
    console.log("45887是一个质数");
} else {
    console.log("45887不是一个质数");
}
