let obj = {
    name : "faiz",
    state : "maharashtra",
    country : "india"
}

// let name = obj.name;
// let state = obj["state"];

// Destructuring 
// let {name,state,country} = obj;

// we can even change the array names
let {name:Firstname,state,country,extra="400003"} = obj;

console.log(Firstname,state,country,extra);