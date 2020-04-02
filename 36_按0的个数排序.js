// 给你一个数组[1030, 56000, 20300040, 20, 8933, 28001020]。请将这个数组按各个数字含有零的数量进行排序，由少到多
var arr = [1030, 56000, 20300040, 20, 8933, 28001020];
function numzero(n) {
    for (var i = 0; i < arr.length; i++) {
        var str_i = n.toString();
        var count = 0;
        for (let j = 0; j < str_i.length; j++) {
            if (str_i[j] == 0) {
                count++;
            }
        }
    }
    return count;
}
arr.sort(function (a, b) {
    return numzero(a) - numzero(b);//倒序
});
console.log(arr);