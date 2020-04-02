//寻找10000以内的完美数 
// 完美数（Perfect number），是一些特殊的自然数。它所有的真因子（即除了自身以外的约数）的和（即因子函数），恰好等于它本身

function perfect_number(num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum;
}

for (let i = 1; i <= 10000; i++) {
    if (perfect_number(i) == i) {
        console.log(i);
    }
}