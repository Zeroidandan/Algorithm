// 文件中是2000个学生的考试成绩。请分别统计语文、数学和英语的及格率，及格线均为60分。

// 为了读取文件，需要使用fs模块
var fs = require('fs');

// fs模块可以读取文件，注意readFileSync是“同步”读取文件
// 读取txt文件的路径，必须加./
var str = fs.readFileSync('./考试成绩.txt').toString();

// 按换行符拆
var arr = str.split('\r\n');

// 累加器
var sum_chinese = 0;
var sum_math = 0;
var sum_english = 0;

for (var i = 0; i < arr.length; i++) {
    // 现在每一项是：名，空格，数额
    var item = arr[i];
    // 继续拆，用空格拆
    var _arr = item.split(' ');
    // console.log(_arr);
    // 拆之后，_arr[3]这项就是语文成绩，_arr[5]这项就是数学，_arr[7]这项就是英语
    sum_chinese += Number(_arr[3]);
    sum_math += Number(_arr[5]);
    sum_english += Number(_arr[7]);
}

average_chinese = Math.round((sum_chinese/2000)*100)/1000;
average_math = Math.round((sum_math/2000)*100)/1000;
average_english = Math.round((sum_english/2000)*100)/1000;
console.log("语文的及格率是：" + average_chinese + "%; 数学的及格率是：" + average_math + "%; 英语的及格率是：" + average_english+"%");