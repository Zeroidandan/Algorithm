// 执行结果
var a = 10;

function fun() {
    a++;
    if (a > 10) {
        var a = 9;
    }
}
fun();              
console.log(a);     //10

// *****************************************

function fun(o, n) {
    o.m++;      //
    n++;
}

var obj = { 'm': 10 };
var n = 10;

fun(obj, n);

console.log(obj.m, n)   //10,10
