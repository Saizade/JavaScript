const Mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = Mynums.map((items)=> items+10)
console.log(newNums);

const athrNums = Mynums.map((val)=>val*10)
.map((val)=>val+1)
.filter((val)=>val>=40)
console.log(athrNums);
