// function fun() {
//     var a = 10;
//     return function () {
//         console.log(a);
//     };
// }

// var inn = fun();
// var a = 88;
// // inn函数运行的时候，会输出10，还是88？
// inn();

// *****************************************
// function fun() {
//     var a = 10;
//     return function (b) {
//         console.log(a + b);
//     }
// }

// var inn = fun();
// inn(3);     //13
// inn(9);     //19

// *****************************************
// 闭包的作用：偏函数
// function fun(a) {
//     return function (b) {
//         if (b > a) {
//             console.log('体温异常！请隔离！');
//         } else {
//             console.log('正常体温！请放行！');
//         }
//     }
// }
// // A小区，检验标准比较低，37.2就算发烧
// var biaozhun1 = fun(37.2);
// biaozhun1(36.9);
// biaozhun1(36.4);
// biaozhun1(37.3);

// // B小区，检验标准比较宽松，37.5才算发烧
// var biaozhun2 = fun(37.5);
// biaozhun2(36.9);
// biaozhun2(36.4);
// biaozhun2(37.3);

// *****************************************
// 闭包的作用：私有化变量
// function fun() {
//     // 这个a是一个局部变量
//     // 在fun的外面，你要想改变这个a，必须通过getA函数来访问a，必须通过add函数来更改a。
//     var a = 10;
//     return {
//         getA: function () {
//             console.log(a);
//         },
//         add: function () {
//             a++;
//         },
//         pingfang: function () {
//             a *= a;
//         }
//     };
// }
// var obj = fun();
// obj.getA();
// obj.pingfang();
// obj.add();
// obj.add();
// obj.add();
// obj.add();
// obj.add();
// obj.getA();