// 数字金字塔
for (var i = 1; i <= 6; i++) {
    var rowstr = '';
    // 左边：每行的空格 - 行数与空格数的规律 12-2*i，拼接字符串repeat
    rowstr += ' '.repeat(12 - 2 * i);

    // 追加左边数字
    for (var j = i; j >= 1; j--) {
        rowstr += j + ' ';
    }
    // 追加右边数字
    for (var j = 2; j <= i; j++) {
        rowstr += j + ' ';
    }
    // rowstr += '1';
    console.log(rowstr);
}