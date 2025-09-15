const myarr = [1,2,3,4,5]
console.log(myarr[0]);
console.log(myarr.length);

// to add element
myarr.push(6)
myarr.push(7)
console.log(myarr)
// to delete the element
// note it only removes the last element
myarr.pop()
console.log(myarr);
// checking if the element is present in array or not
console.log(myarr.includes(4));
//  to convert array into string
const newarr=myarr.join()
console.log(newarr);

// to combine two arryas or string together

const marvel_heros = [ "thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);


// to convert string,object,number to array
console.log(Array.from("Sai"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))