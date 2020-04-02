// 三元运算符实现斐波那契数列
// 表达式 ? 表达式为true的时候的值 : 表达式为false的时候的值

function fib(n) {
    return n == 0 || n == 1 ? 1 : fib(n - 1) + fib(n - 2);
}

for (let i = 0; i <= 20; i++) {
   console.log(fib(i)); 
}