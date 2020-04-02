// 斐波那契数列:这一项的数字等于前两项的和

function fib(n) {
    // 最开始的两项为1
    if (n == 0 || n == 1) return 1;
    // 不是前两项时执行
    return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i < 20; i++) {
    console.log(fib(i));
}