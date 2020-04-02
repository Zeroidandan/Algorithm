// 【验证数组均为偶数】数组[6, 10, 12, 14, 88, 81, 100, 56]中是否每项都是偶数？
var arr = [6, 10, 12, 14, 88, 81, 100, 56];
// 立旗子flag，进行判断
var isAllEven = true;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        isAllEven = false;
        break;
    }
}

if(isAllEven){
    console.log("该数组的每项均为偶数");
}else{
    console.log("该数组的每项不是均为偶数");
}