const obj = {
    name :"Sai",
    age : 20,
    email : "sai01@gmail.com",
    college : "Gcoej"
}

console.log(obj);
console.log(obj.email);

obj.age=21
console.log(obj.age);

// to combine the object
const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}
const obj3= {5:"a", 6:"b"}

const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);


// to get the keys and values of the object
const tinder={
    id : "123abc",
    name : "Sai Zade"
}
console.log(Object.keys(tinder));
console.log(Object.values(tinder));