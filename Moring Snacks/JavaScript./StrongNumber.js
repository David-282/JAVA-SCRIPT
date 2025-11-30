let number = 144
 let digits=number
let count = 1
let sum =0
while (digits!=0){
      let productFactorial =1
      
      let SeperatingNumbers=digits%10
          for( let index=1;index<=SeperatingNumbers;index++){
                    productFactorial*=index
                   
               }
                     sum+=productFactorial
               digits= Math.floor(digits/10)
              
count++
}  
                     if (number == sum){
                    console.log("The number is a strong number")}
               else{console.log("The number is not a stong number")}
