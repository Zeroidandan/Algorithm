// 【验证数组均为偶数】数组[6, 10, 12, 14, 88, 81, 100, 56]中是否每项都是偶数？
var arr = [6, 10, 12, 14, 88, 81, 100, 56];
// 用i的长度进行判断
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        break;
    }
}

if(i==arr.length){
    console.log("该数组的每项均为偶数");
}else{
    console.log("该数组的每项不是均为偶数");
}