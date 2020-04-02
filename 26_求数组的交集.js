// 【求数组交集】求数组[1, 3, 8, 10, 12]和数组[4, 2, 10, 1, 3, 9, 17, 3]的交集
var arr1 = [1, 3, 8, 10, 12];
var arr2 = [4, 2, 10, 1, 3, 9, 17];
// 用来放交集的数组
var mix_arr = [];

// 循环遍历
for (var i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i])){
        mix_arr.push(arr1[i]);
    }
}
console.log(mix_arr);