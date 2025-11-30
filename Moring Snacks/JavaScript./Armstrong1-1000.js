let number =1000

for (let count=1; count<=number;count++){
      let  sumOfCube =0
      let digits = count
      let numD = count.toString().length
       while ( digits!=0){
          let seperateDigits = digits%10
          let cube= seperateDigits**numD
                  sumOfCube += cube
               digits= Math.floor(digits/10)
          }
            if (sumOfCube==count){
               console.log(count)
     }
}

        

