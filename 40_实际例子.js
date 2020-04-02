var obj = {
    '意大利': 4400,
    '美国': 1107,
    '德国': 115,
    '法国': 1300
};

// 对象转数组
var arr = [];
for (var k in obj) {
    arr.push({ 'contury': k, 'number': obj[k] });
}
// console.log(arr);
arr.sort(function(a,b){
    return b.number - a.number;
});

for (let i = 0; i < arr.length; i++) {
    console.log(`第${i}名：${arr[i].contury}:治愈了${arr[i].number}`);    
}


