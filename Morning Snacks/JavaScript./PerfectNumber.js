let integer=6
sumOfFactors=0

for (let count =1;count<=integer;count++){
     if(integer%count==0 && count< integer){
         sumOfFactors +=count
               }
   }
     if (sumOfFactors ==integer){
          console.log("The number is perfect number")
}
     else{
          console.log("The number is not a perfect number")
}









