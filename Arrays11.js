const myArr = [0,1,2,3,4] 
const myHeros = ["shaktiman" , "naagraj"] 

console.log(myArr[1])

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[2])

Array.methods

myArr.push(6)
myArr.push(7) 
myArr.pop()
console.log(myArr)
   
myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr) 

myArr.shift()
console.log(myArr)
  
console.log(myArr.includes(6))
console.log(myArr.indexOf(6))

console.log(myArr.indexOf(19))

const newArr = myArr.join()

console.log(newArr)
console.log(typeof newArr)

const myn1 = myArr.slice(1,3) 
console.log(myn1)

const myn2 = myArr.splice(1,3)
console.log(myn2)