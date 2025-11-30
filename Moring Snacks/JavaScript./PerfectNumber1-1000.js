let number=1000
for(let index=1;index<=number;index++){
          let sumOfFactors=0     
     for (let count =1;count<index;count++){
          if(index%count===0 ){
              sumOfFactors +=count
                    }
        }

          if (sumOfFactors ===index){
               console.log(index)
     }
}





