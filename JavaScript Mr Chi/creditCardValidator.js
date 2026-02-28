

// const prompt = require("prompt-sync")();
     
// let userInput= prompt("Hello, Kindly Enter Card details to Verify: ");
    
     
     // let cardNum = userInputToArray(userInput);
     
  
     //    console.log("****************************");
     //    console.log("**Credit Card Type:"+cardType(userInput));
     //    console.log("**Credit Card Number:"+userInput);
     //    console.log("**Credit Card Digit Lenght:"+cardNum.length);
     //    console.log("**Credit Card Validity Status:"+finalValidation(cardNum));    
     //    console.log("****************************");


     function userInputToArray (number){
     let card = number+"";

     let  cardArr = []
     for(let count=0;count<card.length;count++){
          cardArr.push(parseInt(card[count]));
     }
     return cardArr
}   


     function cardType (number){
     
     let card = "";    

        if (number[0]==4){
          card= "Visa Card";          
}
       else if (number[0]==5){
          card= "MasterCard";
}
       else if (number[0]==6){
          card= "Discover Card";
}
        else if(number[0]==3 && number[1]==7){

          card ="American Express Card";
}
         else {          
              card= "Invalid Card";
     }
          return card;
}

     function sumOfOddIndex (number){
     let sum=0;
     
     for(let count =number.length-1;count>=0;count--){

     if (count%2!=0){

          sum+=number[count];          
}
}
    return sum;     
}

     function sumOfEvenIndex(number){
     let multiplication=0;
     let sum=0;
     let firstNumber=0;
     let secondNumber=0;
     let sumOfNumbers=0;

     for (let count = number.length-1;count>=0;count--){

          if(count %2 ==0){
          multiplication=number[count]*2;
}
          
          if(multiplication>9){
              firstNumber=Math.floor(multiplication/10);
              secondNumber=multiplication%10;
              sumOfNumbers=firstNumber+secondNumber;
               multiplication=sumOfNumbers;
}          
                sum+=multiplication;

       

          multiplication=0;
          firstNumber=0;
          secondNumber=0;
          sumOfNumbers=0;
}

               return sum;
}

     function sumOfEevAndOddIndex(number){

     let sum=sumOfOddIndex(number)+sumOfEvenIndex(number);

               return sum;
}
     
     function finalValidation(number){

     if (number.length < 13 || number.length > 16) return "Invalid";
     
     if (cardType(number) === "Invalid Card") return "Invalid";

     let card= sumOfEevAndOddIndex(number)%10;
     
     if (card ==0){
    
          return "Valid";}

     else{
     return     "Invalid";}
}

module.exports = {finalValidation, sumOfEevAndOddIndex,sumOfEvenIndex,sumOfOddIndex,cardType,userInputToArray}
