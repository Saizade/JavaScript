let Mydate = new Date()
console.log(Mydate.toString());
console.log(Mydate.toDateString())
console.log(Mydate.toISOString());
// type of date is Object :
console.log(typeof Mydate)

// To create a specific date by our choice :
// Note that the month in javascript starts from 0 
let MyCreatedDate = new Date(2023,0,13)
console.log(MyCreatedDate.toDateString());
