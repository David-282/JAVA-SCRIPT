let numbers = [8,426,50,30,60,67,73,100]

let largest = numbers[0]
let secondLargest=numbers[1]
          for(count=0;count<numbers.length;count++){
        if(largest < numbers[count]){
          largest = numbers[count]
}
          }
             for(index=0; index<numbers.length;index++){
           if(numbers[index] == largest) secondLargest = numbers[index+1]
       if(secondLargest < numbers[index] && numbers[index] != largest){
                    secondLargest = numbers[index] }
}
                    console.log(largest,secondLargest)
