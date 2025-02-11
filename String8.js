const  name = "praveen"
const repoCount = 123 

//console.log(name + repoCount +  45)

console.log(`hello My name is ${name} and my repocount is ${repoCount} `) 

const getName = new String("praveen") // here getName as a object not a variable  
console.log(getName.toUpperCase()) 
console.log(getName.charAt(3))
console.log(getName. indexOf('r'))  

const newString = getName.substring(0,4)
console.log(newString)

const anotherString = getName.slice(-7 , 4)
console.log(anotherString) 

const url = "www.praveen@kdfnsdmf--"
console.log(url.replace("-" ,"@"))

console.log(url.includes("praveen"))

const getname = "praveen-bct-vidisha" ;

console.log(getname.split('-'))