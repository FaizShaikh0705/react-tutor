let obj = {
    name: "Faiz",
    add: {
        country: "india",
        state:{
            code:"Mh",
            pin:"400003"
        }
    }
}


// let {name} = obj;
// console.log(name)

// let {add:{country:hii}} = obj;
// console.log(hii);

let {add:{state:{pin:num}}} = obj;
console.log(num);