// 根据txt文件中的数据，利用js统计捐款总数
// 为了读取文件，需要使用fs模块
var fs = require('fs');

// fs模块可以读取文件，注意readFileSync是“同步”读取文件
// 读取txt文件的路径，必须加./
var str = fs.readFileSync('./捐款明细.txt').toString();
// 按换行符拆
var arr = str.split('\r\n');

// 累加器
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    // 现在每一项是：名，空格，数额
    var item = arr[i];
    // 继续拆，用空格拆
    var _arr = item.split(' ');
    // console.log(_arr);
    // 拆之后，_arr[1]这项就是数额，_arr[0]这项就是名字
    sum += Number(_arr[1]);
}
console.log(sum);
