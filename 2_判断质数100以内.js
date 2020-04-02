// 寻找100以内的质数
for (var i = 1; i <= 100; i++) {
    for (var j = 0,sum = 0; j <= i; j++) {
        if (i % j == 0) {
            sum++;
        }
    }
    if (sum == 2) {
        console.log(i);
    }
}
