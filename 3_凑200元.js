// 凑200元
// 用1元、2元、5元纸币，凑出200元

// 穷举法
var sum = 0;
for (var i = 0; i <= 200; i++) {
    // 1元：最多200个;    2元：最多100个;  5元：最多40个; 
    for (var j = 0; j <= 100; j++) {
        for (var k = 0; k <= 40; k++) {
            if (i + 2 * j + 5 * k == 200) {
                sum++;
                console.log('1元：' + i + '个；2元：' + j + '个；5元：' + k + '个。');
            }
        }
    }
}
console.log(sum);