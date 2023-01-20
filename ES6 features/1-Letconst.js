// Let and const are used to create variables in ES6
// var keyword to create variable in ES6

var age = 30 // Global variuable

function sayHi()
{
    if(true)
    {
        let message = "Welcome to ES6 concepts"
         Function scope 
        console.log(message)
        console.log(age)
    }
    message = "I dont like it"
     console.log(messsage)
    console.log(age)
}

sayHi();