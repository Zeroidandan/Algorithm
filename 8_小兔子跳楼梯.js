// 一只小白兔要走100阶楼梯，但是它无聊，所以它第一次跳1阶，第二次跳2阶，第三次跳3阶……，第十次跳10阶……依次类推。请问它跳几次，能跳完100阶楼梯。

// while循环：不知道循环次数
var count = 0;
var sum = 0;
while (true) {
    count++;
    sum += count;
    if (sum >= 100) {
        break;
    }
}
console.log(count);



