var arr = [1,2,3,4,5];

// 数组打点调用join()，表示用什么字符串分隔
// 什么都不加，默认逗号
console.log(arr.join());
// 加空字符串
console.log(arr.join(''));
// 加特定，就是用它分隔
console.log(arr.join('A'));