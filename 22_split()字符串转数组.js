var str = "我爱他他爱我他爱她";
// 字符串调用split，只有字符串能够调用split，表示用某个字符将字符串拆分为数组
// split写空字符串，把每个字拆为数组项
var arr = str.split('');
console.log(arr);
var arr1 = str.split('爱');
console.log(arr1);