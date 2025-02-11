// stack (pemitive) 
// heap (non-premitive) 

let id = 123 ;
let anortherid = id  

anortherid = 321 

console.log(id)
console.log(anortherid)

let userone = {
  email :"praveen@google.com" ,
  upi : "user@ybl"
}

let usertwo = userone   

console.log(userone)
console.log(usertwo) 

usertwo.email = "youtube.com" 

console.log(userone)
console.log(usertwo)