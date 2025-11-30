let number =153
let digits =number
let sumOfCube= 0
while ( digits!=0){
     let seperateDigits = digits%10
     let cube= seperateDigits**3
          sumOfCube += cube
          digits= Math.floor(digits/10)
}
     if (sumOfCube==number){
          console.log("The number is an Armstrong number")
}
     else{
           console.log("The number is not an Armstrong number")
}






