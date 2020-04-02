// 多次开方：使用循环语句
var num = Math.sqrt(2);

for (var i = 0; i < 5; i++) {
    num = Math.sqrt(num / 2);
}
console.log(num);