// 莱布尼茨级数

// 引入内置模块，并且存为rl变量。require表示引入。
var readline = require('readline');

// 创建一个读取接口，这段代码来自nodejs官网手册
// https://nodejs.org/api/readline.html
var num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 回调函数就是用户输入之后做的事情，参数a就是用户输入的数字。
num.question('请输入一个数字', function (a) {
    // console.log('你输入的是' + a);
    var sum = 0;
    for (var i = 1; i <= a; i++) {
        var pai = 0;
        for (var j = 1; j <= i; j++) {
            pai = i / (2 * i - 1);
            sum += pai;
        }
    }
    console.log('圆周率π：' + (pai + 1) * 2);
});
