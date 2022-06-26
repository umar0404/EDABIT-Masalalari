// function reverse(num) {
//     num.toString().split(' ').sort((a,b) => a - b)
// }
// console.log(reverse(12345));



// let a = 123484;


// 1 - masala.
// function name(params) {
//     let b = ''
//     var a = params.split('')
//      a.map((value, index) => {
//         if(value === value.toUpperCase() && index !== 0) {
//             b += ' ' + value 
//         } else b += value
//     })
//     return b
// }
// console.log(name('SheWalksToTheBeach'));

// 2 - masala.
// function name(params) {
    //     var symbol = '!@#$%^&*()_+'
    //     var str = ''
//     var a = params.filter((value) => symbol.includes(value)).length
//     var b = params.filter(value => typeof value === 'string' && !symbol.includes(value)).length
//     var c = params.filter((value) => typeof value === 'number').length
//     return [a,b,c]
// }
// console.log(name([1, 2, 3, 'web', 'web', '@', '$']));

// 3 - masala.
// let str1 = '12.00' // 12
// let str2 = '12.001' // 12.001
// let str3 = '12.100' // 12.1
// let str4 = '1200' // 1200

// function yaxlitlash(str) {
// return parseFloat(str)
// }
// console.log(yaxlitlash(str1))
// console.log(yaxlitlash(str2))
// console.log(yaxlitlash(str3))
// console.log(yaxlitlash(str4))

// 4 - masala.
// function numberOfArr(arr) {
//         return arr.length === arr.filter(value=> value===arr[0]).length
//     }
//     console.log(numberOfArr([1,1,1,1]))
//     console.log(numberOfArr([1,1,1,2]))
//     console.log(numberOfArr([2,1,1,1]))
    
    // 5 - masala.
// let ar = [1,2,4,5,6,2,3,5,6,7,8,9];
// let b = []
// let result = 0
// ar.map((value, index) => {

//     let c = ar.slice(index+1)
//     let count = 0
//     let res = false
//     let num = false
//     c.map((item,i) =>{
    //         if (item === value+i+1) {
        //             // console.log(item, i)
        //             count++
        //         }
        //     })
        //     if(!res && count >= 2 && !num){
            //        res = true
            //        result++
            //     }else if(res && count < 2){
                //         res = false
                //     }
                //     console.log(result);
                // })
                
// 6 - masala.
// function reverse(num) {
//     return +`${num}`.split("").sort((a,b)=>b-a).join("")
// }
// console.log(reverse(4215));


// function dublicate(num) {
//     let res = num.filter((v,i) => num.indexOf(v) === i)
//     return +res.join('')
// }
// console.log(dublicate([1,2,3,3,4,4,5,6,6,7]));


// function sort(num){
//     return +`${num}`.split("").sort((a,b)=>b-a)
// }

// console.log(sort([7,6,5,4,3,2,1]));

// function reverse(num) {
//     let arr = `${num}`.split('')
//     let res = ''
//     arr.map((value) => {
//         res = value + res
//     })
//     console.log(+res);
// }
// reverse(7654)

// function incrementItems(num) {
//     let res = `${num}`.split(' ').map((value, index) => { 
//     })
//     console.log(+res);
// }
// incrementItems([0, 1, 2, 3]) 

// 1 - masala
// var ar = [1,2,2,3,4,5,5,5]

// uniqueArray = ar.filter(function(item, pos) {
//    return ar.indexOf(item) == pos;
// })
// console.log(uniqueArray);

// 1 - masala
// const numberSplit = (num) => {
//     if (num === undefined) {
//        return
//     } 
//     else {
//        let a = Math.floor(num / 2);
//        let b = num - a;
//        let c = [];
//        c.push(a, b);
//        return c;
//     }
//  };
//     console.log(numberSplit(4));
//     console.log(numberSplit(10));
//     console.log(numberSplit(11));
//     console.log(numberSplit(-9));

// 2 - masala
///// 4 ////

//    const tuckIn = (arr1, arr2) => {
//       let a = [arr1.shift()];
//    let b = [arr1.pop()];
//       for (let i = 0; i < arr2.length; i++) {
//          arr1.push(arr2[i]);
//       };
//    arr1.push(b[0]);
//    for (let n = 0; n < arr1.length; n++) {a.push(arr1[n]);};
//    return a;
// };
//    console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
//    console.log(tuckIn([15,150], [45, 75, 35]));
//    console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

// let obj = {
//     name1:'Umar', status1:'Developer',
//     name2:'Elbek', status2:'Accountant',
//     name3:'Doniyor', status3:'Teacher',
//     name4:'Qodirali', status4:'Student',
// }

// delete obj.name1
// obj.student = {nm:'sdkk',hf:2}
// console.log(Object.entries(obj).flat(Infinity))
// console.log(Object.values(obj));


// const descendingOrder = (n) => +n.toString().split("").sort((a,b)=>b-a).join('')
// console.log(descendingOrder(0));

// function highAndLow(numbers){
//     if(numbers === Math.numbers.min()){

//     }
// }

// function accum(s) {
//   return s.split('').map((value,index) => value.repeat(index)).join('').toLowerCase().split('').map((value, index) => value).join('')
// }
// console.log(accum("ZpglnRxqenU"));

// let arr = ['Apple', 'Orange', 'banana']
// const [apple,Orange,banana] = arr
// console.log(banana);


// arr2 = [6, 7, 8, 9, 10]
// arr1 = [1, 2, 3, 4, 5]
// console.log(arr1);
// console.log([...arr1, ...arr2]);

// let obj = {title:'WebBrain', age: 2, desc: 'IT Center'}
// Object.entries(obj).map(([value]) => {
//     console.log(obj[value]);
// });
// name = 'desc'
// console.log(obj.name);
// console.log(obj[name]);


// let obj = [
// {id:1, status:'passed', name:'Xabibullayev Dostonbek'},
// {id:2, status:'re-exam', name:'Rakhimjonov Davronbek'},
// {id:3, status:'passed', name:'Mamajonov Mirzohid'},
// {id:4, status:'passed', name:'Mustafoyeva Ferangiz'},
// {id:5, status:'failed', name:'Komil Muhammadiyev'},
// {id:6, status:'passed', name:'Mahkamov Tohirbek'},
// {id:7, status:'failed', name:'Nuraliev Zuhriddin'},
// ]
// const getUser = (id,creat,update) =>{
// let res = obj.filter((value) => value.id === id || value.status === id || value.name.id === id)
// console.log(...res);
// }
//  getUser('passed')
// let str1 = "abspw";
// let str2 = "absp";

// let sum1 = str1.split("").sort();
// let sum2 = str2.split("").sort();

// let arr = sum1.concat(sum2);

// let result = true;

// for (let i = 0; i <= arr.length; i++) {
//   if (sum1[i] == sum2[i]) {
//     result = true;
//   } else {
//     result = false;
//     arr.length = 0;
//   }
// }
// console.log(result);

// let str1='haabssg'
// let str2 ='gabassh'
// console.log(str1.split('').sort((a, b) => a.localeCompare(b)).join() == str2.split('').sort((a, b) => a.localeCompare(b)).join());


// const noSpace = (x) => x.split('').filter((value) => value !== ' ').join('')
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// function squareSum(numbers){
//     return numbers.length ? numbers.map((n) => n * n).reduce((a,b)=>a + b) : 0
// }

// console.log(squareSum([1,2]));
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min()(...args)
//     }
// }
// console.log(findSmallestInt([1,4,4,5,56,667,7,7]));

// function arr(num) {
//    return Math.min(...num)
// }

// console.log(arr([1,2,3,4]));
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
// }

// const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((value) => value).length


// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]));

// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 

// function isDivisible(n, x, y){
//     if(n % x == 0 && n % y == 0){
//         return true
//     }else{
//         return false}
// }

// console.log(isDivisible(8,2,4));


// function accum(s) {
//     let res = ''
// for (let i = 0; i < s.length; i++) {
//     for (let g = 0; g <= res.length; g++) {
//         res = s[i]    
//     }
// }
// return res
// }
// console.log(accum("ZpglnRxqenU"));

// for(let key in {1:1, 0:0}){
//     alert(key)
// }

// const numbers = [1,2,12,23,4,3];
// const result = numbers.sort((a,b) => a - b);
// console.log(numbers.sort());

// console.log(NaN === NaN);

// const user = {
//     name: 'JS',
//     age: 26
// }

// for (let [k, v] of Object.entries(user)) {
//     console.log(k, v);
// }


// const arr = ['Salom', 'Obunachila', 'C', 'Testi']
// arr.push(3);
// arr.push(2);
// console.log(arr.push(1));


// let str = 'JavaScript';
// let arr = [str.slice(4), 'ECMA'];
// console.log(arr.reverse().join(''));


// let arr = ['Java', ['Script', ' '],['заметки']]
// console.log(arr.flat().join(''));


// function newArray(n, v) {
//     return Array(n).fill(v);
// }
// console.log(newArray(5, 'JS'));


// const num = 7.7e-3;
// console.log(num);


// let str = 'JavaScript testi';
// let arr = str.split('');
// console.log(arr.join());


// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3);
// console.log(arr);

// function century(year) {
//     let res = year / 100
//     return res === 0 ? Math.floor(res) : Math.ceil(res)
// }
// console.log(century(1901));

// function getCount(str) {`
//     let vowel = ['a', 'e', 'i', 'o', 'u']
//     let res = 0
//     str.split('').map((value) => {
//         if (value.includes(vowel)) {
//             res++
//         }
//     })
//     return res
// }
// console.log(getCount("abracadabra"));



// function extractMiddle(str) {
//     var position = ''
//     var length = ''
//     if(str.length % 2 == 1) {
//         position == str.length / 2;
//         length == 1;
//     } else {
//         position = str.length / 2 - 1;
//         length = 2;
//     }
//     return str.substring(position, position + length)
// }
// console.log(extractMiddle("middle"));


// const getCount = (str) => str.match(/[aeiou]/g, "").length
// console.log(getCount("asdfrew"));


// const squareDigits = (num) => +`${num}`.split('').map((value) => value ** 2).join('')
// console.log(squareDigits(3212));


// const disemvowel = (str) => str.replace(/[aeiou]/gi, "")
// console.log(disemvowel("What are you, a communist?"));

// function highAndLow(numbers){
//     let res = numbers.toNumber
//     return +(Math.min(numbers) && Math.min(numbers))
// }
// console.log(highAndLow("1 2 3 4 5"));

// const getMiddle = (s) => s.split(' ').map((value) => value.length % 2 == 0 ? value[value.length/2-1]+ value[value.length/2] : value[value.length/2-0.5]).join(' ')
// console.log(getMiddle('test'));


// var isSquare = function(n){
//     if (n === 0) {
//     return true;
//     }
//     var number = Math.sqrt(n)
//     if (n % number === 0) {
//       return true
//     } else {
//       return false
//     }
// }

// const isSquare = (n) => n === 0 || n % Math.sqrt(n) === 0 ? true : false


// const filter_list = (l) => l.filter((item) => typeof item === "number" && item >= 0);
// console.log(filter_list([1,2,'a','b','c','d']));

// function accum(s) {
//     return s.split('').map((value) => value.repeat(value.lenght++))
// }
// console.log(accum("ZpglnRxqenU"));

// function isIsogram(str){
//     str = str.toLowerCase()
//     return str.split('').map((value) => str.split('').filter((filterValue)=> value == filterValue).length == value >= 2 ? '1' : false).filter(Boolean).length >=2 ? false : true
// }
// console.log(isIsogram('Dermatogltyphics'));


// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }
// console.log(XO('oxx'));

// const accum = (s) => s.split('').map((value, index) => (value.toUpperCase() + value.toLowerCase().repeat(index))).join('-');
// console.log(accum("ZpglnRxqenU"));

// const findShort = (s) => s.split(' ').sort((a,b) => b.length - a.length).pop().length

// console.log(findShort("Let's travel abroad shall we"));


// const findShort = (s) => s.split(' ').sort((a, b)=> b.length - a.length).pop().length
// console.log(findShort("Let's travel abroad shall we"));