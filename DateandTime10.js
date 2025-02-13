let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

//let  myCreatedDate = new Date(2023, 0, 23 , 5 , 2)
let  myCreatedDate = new Date("2023 , 2 ,01")
// console.log(myCreatedDate.toString())
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString()) 

let Timestamp = Date.now()

console.log(Timestamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
  weekday: "long"
})