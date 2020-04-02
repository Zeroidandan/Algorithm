// 寻找所有水仙花数
// 水仙花数是指一个 3 位数，它的每个位上的数字的 3次幂之和等于它本身。比如153就是水仙花数，因为1的立方 + 5的立方 + 3的立方就等于153本身

function narcissus_number(num) {
    var str = num.toString();
    if (Math.pow(str[0], 3) + Math.pow(str[1], 3) + Math.pow(str[2], 3) == num) {
        console.log(num);
    }
}

for (let i = 100; i < 1000; i++) {
    narcissus_number(i);
}