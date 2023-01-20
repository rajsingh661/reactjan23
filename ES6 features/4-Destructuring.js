// Destructuring with array

// let arr = [2,3,4,5,6,7]
// a = arr[0]
// b = arr[1]
// c = arr[2]
// d = arr[3]
// e = arr[4]
// f = arr[5]

// let [a,b,c,d,e,f] = arr
// // Selective destructing
// let [a,,,,,f] = arr
// console.log(a,f)

let person = {
    name : "Raj",
    age: 30,
    city: "Mathura",
    email: "raj123@gmail.com",
}
// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.email)

let {name, city, email} = person
console.log(name)