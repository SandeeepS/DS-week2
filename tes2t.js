let obj1  = {
    "name":"sandeep",
     address:{
        city:"kochi"
     }
}

let obj2 ={ ...obj1};

obj2.name = "jacki";
obj2.address.city = "Ranni";
console.log(obj1.name);
console.log(obj2.name);
console.log(obj1.address.city);

