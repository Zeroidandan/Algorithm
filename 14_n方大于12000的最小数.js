// 满足n方大于12000的n的最小值
var n = 0;
while(true){
    n++;
    if(Math.pow(n,2)>12000){
        console.log(n);
        break;
    }
}