// 【判断对称数组】数组[1, 3, 4, 5, 3, 5, 4, 3, 1]是不是对称的
var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
// var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1, 2];
var isSymmetry = true;
for (var i = 0; i < arr.length / 2; i++) {
    // 判断数组的左部分和，数组倒数右部分是否相同
    if (arr[i] != arr[arr.length - i - 1]) {
        isSymmetry = false;
    } 
}
if(isSymmetry){
    console.log("该数组是对称数组");
}else{
    console.log("该数组不是对称数组");
}