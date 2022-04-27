// 1 - masala.

// function isTrue(relation) {
// 	return eval(relation.replace('=', '==='))
// }

// 2 - masala.

// array.

// function tuckIn(arr1, arr2) {
//     return [arr1[0], ...arr2, arr1[1]]
// }

// 3 - masala.

// function canNest(arr1, arr2) {
// 	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
// }

// 4 - masala.

// function sumOfCubes(nums) {
// 	return nums.reduce((x,y)=>x+y**3,0)
// }

// 5 - masala.

// function getAbsSum(arr){
//     return arr.reduce((count, num) => count + Math.abs(num), 0)
// }

// 6 - masala.

// function sortByLength(arr) {
// 	return arr.sort((a, b) => a.length - b.length);
// }

// 7 - masala.

// function seriesResistance(arr) {
//     let sum = arr.reduce((a, b) => a + b, 0);
//     return (sum > 1) ? sum + " ohms" : sum + " ohm";
// }

// 8 - masala.

// function numberSplit(n) {
// 	return [Math.floor(n/2), Math.ceil(n/2)]
// }

// 9 - masala.

// function societyName(friends) {
// 	return friends.map(m=>m[0]).sort().join('');
// }

// 10 - masala.

// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)];
// }

// const makeHamburger = (bread) =>{
//     return (red) => {
//     return (item1) => {
//     return (item2) => {
//     return (item3) => {
//     return (item4) => {
//     return (item5) => {
//     return (item6) => {
//     return `${bread} + ${red} + ${item1} + ${item2} + ${item3} + ${item4} + ${item5} + ${item6}`
// };
// };
// };
// };
// };
// };
// };
// };
// console.log(makeHamburger('non')('ketchup')('non')('ketchup')('non')('non')('ketchup')('non'));

// function addUp(length){
//     return function (breadth){
//         return function (height) {
//             return length * breadth * height
//         }
//     }
// }
// console.log(addUp(4)(5)(6));

// const getFull = (callback) => {
//     var width = 50;
//     var height = 50;
//     return callback(width, height);
// };

// console.log(getFull((w, h) => {return w + h}));

// function addUp(length, breadth, height){
//     return length * breadth * height
// }

// console.log(addUp(4, 5, 6));

// const recursive = (num) => {
//     console.log(num);
//     num++
//     if(num !== 10){
//         recursive(num)
//     }
// }
// recursive(0)

// const recursive = (arr,name) =>{
//     arr.map((i)=>{
//         if(i === name){
//             console.log(arr);
//         }else{
//             arr.shift();
//             recursive(arr,name);
//         }
//     })
// }
// recursive(['Asadbek','Elbek','dd','Elbek','Elbek','Qodirali','Umar','Umarb','Umarbe','Umarbek'],'Elbek');

var con = document.querySelector('#container')

var arr =[
    {id:1, name:'Fozil', age:23},
    {id:2, name:'Odil', age:15},
    {id:3, name:'Nodir', age:40},
    {id:4, name:'Qodir', age:50}
]

const getUser = () =>{
    var user = ''
    arr.map((value) => {
        user+=`<h1>${value.id}. ${value.name} ${value.age}</h1>`
    })
    con.innerHTML = user
}
getUser()