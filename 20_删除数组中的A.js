var arr = ['神雕侠侣', 'A', 'A', '杨过', 'A', '小龙女', 'A', 'A'];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'A') {
        arr.splice(i, 1);
        i--
    }
}
console.log(arr);