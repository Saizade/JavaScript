// for of loop
// we can apply this loop on anything like array,numbers,strings,objects etc.
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "HELLO WORLD"
for (const str of greetings) {
    if(str==" "){
        continue
    }
    console.log(`Each word is ${str}`);
}

const map = new Map()
map.set = ('In',"India")
map.set = ('Usa',"United States of America")
map.set = ('Fr',"France")
for (const [key,value] of map) {
    console.log(key,':-',value);
}

// for in loop
const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
}

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

// for each loop
const language = ["java","cpp","python","JavaScript"]

language.forEach( function(item){
    console.log(item);  
})
// same for each function we can write for arrow function
language.forEach( (val)=>{
console.log(val);
})

// we can write object in array as well.
const myCoding = [
    {
        languagename : "Java",
        languagefilename : "java"
    },
    {
        languagename : "C++",
        languagefilename : "cpp"
    },
    {
        languagename : "Python",
        languagefilename : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languagename);
})

// we have .filter for accessing the specfic element or some conditions
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((numss)=>numss>4)
console.log(newNums);
// also we can write the same code in this way if we use paranthesis we have to use return keyword
// and if we dont want to use paranthesis just give conditions for .filter
const nextnewNums = myNums.filter((numsss)=>{
    return numsss>5
})
console.log(nextnewNums);
