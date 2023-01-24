console.log("Statement-1")
console.log("Statement-2")

setTimeout(() => {

    // Time intensive task
    var result =0;
    for(let i = 0 ; i<1000000; i++)
    {
        result += i;
    }
    console.log(result)

},);

console.log("Statement-3")
console.log("Statement-4")
console.log("Statement-5")

// Asynchronous function
// 1. setInterval(() => {
    
// }, interval);

// 2. setTimeout(() => {
    
// }, timeout);