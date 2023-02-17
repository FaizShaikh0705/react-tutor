// What is DeStructuring?
// its Nothing but easy way to de structure any array or an object


// Example1

let arr = ["hi","I","Am","faiz"]

// Basic method
// let a = arr[0]     
// let b = arr[1]

// console.log(a,b);


// Destructuring
// let [a,b,c,d] = arr;
// console.log(a,b,c,d);

// Even you can skip one array just by giving empty comma
// let[a,,c,d] = arr;
// console.log(a,c,d);

// Also you can aad an extra array which will be shown undefine
// let [a,b,c,d,extra] = arr;
// console.log(a,b,c,d,extra);


// You can defined the extra array while destructuring
let [a,b,c,d,extra= "haha"] = arr;
console.log(a,b,c,d,extra);