// 寻找这样的数字，它自己是对称的数字，正着读、反着读都是一样的，并且它自己也是质数。显示前100个，每行显示10个。

// 判断是否为质数
function isPrime(a) {
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrime(13));

// 判断是否为符合回文
function isHuiwen(a) {
    // 将数字转换为字符串
    var str = a.toString();

    for (var i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
// console.log(isHuiwen(131));

// 计数器
var count = 0;
// 从2开始找
var a = 2;
// 拼凑字符串
var str = '';

while (count < 100) {
    if (isPrime(a) && isHuiwen(a)) {
        // 字符串累加
        str += a + '\t';
        count++;

        if (count % 10 == 0) {
            console.log(str);
            // 清空字符串
            str = '';
        }
    }
    a++;
}