// ES5 functions

// Normal functions
function add(a,b)
{
    return a+b
}
console.log(add(5,10))

// Expression Function | variable invoking function | anonymous function

var sum = function(a,b){
    return a+b
}
console.log(sum(10,20))

// ES6 function | Single line function
// let sum1 = (a,b)=>{
//     return a+b
// };
// console.log(sum1(12,13))

// without return statement
let sum1 = (a,b)=> a+b
console.log(sum1(12,13));

let msg = ()=> console.log("This is arrow function")
msg();



