// 2-masala

// function ayirmaniTopish(a, b) {
//     let res = a - b;
//     return res;
// }
// let res = ayirmaniTopish(20, 15);
// console.log(res);

// 3-masala

// let a = prompt("So'zni kiriting");
// let b = +prompt("Sonni kiriting");

// function test(arg1, arg2) {
//     let res = " ";
//     for(let i = 1; i<=arg2; i++){
//     res += arg1;
//     }
//     return res;
// }
// let res = test(a,b);
// console.log(res);

// 4-masala

// function kub (a){
//     console.log(a**3);
// }
// kub(2);

// 5-masala

// function bolinmaniTopish(a,b){
//     let p = Math.trunc(a / b);
//     return p;
// }
// let res = bolinmaniTopish(18,3)
// console.log(res);

// 6-masala

// function century(year){
//     return Math.trunc(year / 100);
// }
// let y = 1905;
// console.log(y + "yil" + century(y) + " -asrga tegishli");

// 7-masala

// function faktorial(num){
//     let p = 1;
//     for(let i = 1; i <= num; i++){
//         p *= i;
//     }
//     return p;
// }
// let res = faktorial(5);
// console.log(res);

// 9-masala

// function kesibOlish(a,b) {
//     let res = a.slice(0, b);
//     return res;
// }
// let res = kesibOlish("number", 2);
// console.log(res);

// 10-masala

// function num (arr){
//     let res = []
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             res.push(arr[i]) 
//         }
//     }
//     return res;
// } 
// let res2 = num([1,2,"salom",3])
// console.log(res2);

// 11-masala

// function darajaniTopish(a,b){
//     let p = Math.pow(a,b);
//     return p;
// } 
// let res = darajaniTopish(2,3);
// console.log(res);

// 13-masala

// function birlashtirish(a,b){
//     let p = a.concat(b);
//     return p;
// } 
// let res = birlashtirish("hello", "world");
// console.log(res);

// 15-masala

// function test(a) {
//     let res = '';
//     if (typeof a =='string' ) {
//         res = a.charAt(0).toUpperCase() + a.slice(1);
//     }
//     return res
// }
// let res = test("salom");
// console.log(res);


// Massivlarga oid masalalar

// 1-masala

// function sumArr(a,b) {
//     let m = a+b;
//     return m; 
// }

// let res = sumArr(4,6);
// console.log(res);

// 2-masala

// function MaxArr (a,b){
//     let max;
//         if(a > max){
//             max = a;
//         } else{
//             max = b;
//         }
//         return max;
//     }

// let res = MaxArr(5,9);
// console.log(res);

// 3-masala

// let arr = [1,2,3,4];
// let res = arr.sort(function(a,b){
//     return b - a;
// })
// console.log(res);

// 4-masala

// let numbers = [1, 2, -3, 4,-5];
// let musbat = numbers.filter(function(num) {
//     return num > 0; 
// });

// console.log(musbat); 

// 5-masala

// function kv(arr) {
//     let newARR = [];
//     for (let i = 0; i < arr.length; i++) {
//         newARR.push(arr[i] * arr[i]);
//     }
//     return newARR;
// }

// let numbers = [1, 2, 3, 4, 5]
// let res = kv(numbers);
// console.log(res); 

// 7-masala

// function combine (a,b){
//     return a.concat(b);

// }
// let res1 = [1,2,3];
// let res2 = [4,5,6];
// let newArr = combine(res1, res2);
// console.log(newArr);

// 8-masala

// function toqlar (arr){
//     let counter = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 1){
//             counter++;
//         }
//     }
//     return counter;
// } 
// let numbers = [1,2,3,4,5,6,7,8,9];
// let newArr = toqlar(numbers);
// console.log(newArr);

// 10-masala

// function minArr (arg1, arg2){
//     let min;
//     if(arg1 < arg2){
//         min = arg1;
//     } else{
//         min = arg2
//     }
//     console.log(min);
// }

// minArr(5,3);
