// ES6 promise :
// Promise : it is an object whuich return a future value but right
// Promise has three states
// 1. Pending state
// 2. fullfill Stage
// 3. Reject state
// promise are used for communication with APIs
// Promise is well suited for handling asynchronous operation

iscompleted = false;
let learnjs = new Promise((resolve, reject) => {

    // pending state (add delay)

    setTimeout(() => {
        if(iscompleted){
            resolve("I have completed my React training");
        }
        else
        {
            reject("I have not completed my React training");
        }
    }, 3000);
})

//console.log(learnjs);
// Lets handle the promice (consume the promise)

learnjs
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })