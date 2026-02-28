// const prompt = require("prompt-sync")();

// let noOfStudents = parseInt(prompt("How many students do you have ?: "));

// let noOfSubjects = parseInt(prompt("How may subjects do they offer ?: "));

// console.log("Saving >>>>>>>>>>>>>>");
// console.log("Saved Successfully");

     
//      let studentResults = [];
//      for (let student = 0; student < noOfStudents; student++) {
//     studentResults[student] = [];

//     for (let subject = 0; subject < noOfSubjects; subject++) {
//         studentResults[student][subject] = 0;  
//     }
// }
//     console.log(studentResults);
    
//           inputResults(studentResults);
//           let   totalArray=  (totalPerStudent(studentResults));
//           let averageArray =  averagePerStudent(totalArray,noOfSubjects);
//           let  positionArray =    position(totalArray);

//           let  subjectsTotal=  totalPerSubject(studentResults,noOfSubjects);
          hardestAndEasiest
//           let subjectAverageArray = subjectAverage(subjectsTotal,noOfStudents);

//           console.log(studentResults);
//            console.log("=".repeat(70));

//           // console.log("STUDENT\t\t");
//           //  for(let  count=1;count<=noOfSubjects;count++){
//           //      console.log("SUB%d \t",count);
//           //  }
//           // console.log("TOT\t Ave\t POS" );

//           process.stdout.write("STUDENT\t\t");
//      for (let count = 1; count <= noOfSubjects; count++) {
//      process.stdout.write("SUB" + count + "\t");
//           }
//      console.log("TOT\tAVE\tPOS");
//      console.log("-".repeat(70));


//            for (let  index=0;index <noOfStudents;index++){
//  process.stdout.write("Student " + (index + 1) + "\t");
               
//               for (let  element =0;element <noOfSubjects;element++){
//         process.stdout.write(studentResults[index][element] + "\t");            
//               }
//               process.stdout.write(totalArray[index] + "\t");
//     process.stdout.write(averageArray[index].toFixed(2) + "\t");
//     console.log(positionArray[index]); 
//            }
//            console.log("=".repeat(70));
//            console.log();


//                          console.log("SUBJECT SUMMARY");
//                          subjectSummary(studentResults, noOfStudents, noOfSubjects,subjectsTotal,subjectAverageArray);
//                          hardestAndEasiest (studentResults);
//                          classSummary( totalArray,noOfStudents);
          
           function inputResults(studentsResults){


     for(let  count=0; count<studentsResults.length;count++){

          for (let  index=0; index<studentsResults[count].length; index++){
                    console.log(`Entering Score for Student ${count+1}`);
                    studentsResults[count][index] = parseInt(prompt("Enter Score for Subject: "));
                    console.log("Saving >>>>>>>>>>>>>>");
                    console.log("Saved Successfully");
                    console.log();          
}
}
             return studentsResults;
   }

     function totalPerStudent (studentsResults){
     
     let totalArray =  [];
     
     for (let student = 0; student < studentsResults.length; student++) {
    totalArray[student] = 0;
     }

     for(let  count=0; count<totalArray.length;count++){

          for (let  index=0; index<studentsResults[count].length; index++){

          totalArray[count]+= studentsResults[count][index];
}
}

          return totalArray;
}

 
     function averagePerStudent (totalArray,noOfSubjects){
     let averageArray =   [];
     
       for (let student = 0; student < totalArray.length; student++) {
    averageArray[student] = 0;
     }

     for(let  count=0; count<averageArray.length;count++){
          
       averageArray[count] =((totalArray[count]) /noOfSubjects);
     
}

     return averageArray;

}

      function position (totalArray){

     let  positionArray = [];

     for (let student = 0; student < totalArray.length; student++) {
               positionArray[student] = 0;
     }

     for (let  count =0; count <totalArray.length;count++){
          let  position =1;
          for(let  index=0; index<totalArray.length;index++){
          
          if(totalArray[index]>totalArray[count]){
               position++;    
}

}     

               positionArray[count]=position;
}
               return positionArray;
} 


function totalPerSubject (studentsResults,noOfSubjects){


     let   subjectsTotal = []
  for (let subject = 0; subject < noOfSubjects; subject++) {
    subjectsTotal[subject] = 0;
     }

     for(let  count=0;count <studentsResults.length;count++){

          for(let  index=0;index<subjectsTotal.length;index++){
               subjectsTotal [index] += studentsResults[count] [index];
               
          }

     }

          return  subjectsTotal;
}

function subjectAverage (subjectsTotal,noOfStudents){

     let subjectAverageArray = [];

     for (let student = 0; student < subjectsTotal.length; student++) {
    subjectAverageArray[student] = 0;
     }

          for (let  count =0;count<subjectAverageArray.length;count++){
               subjectAverageArray[count]=(subjectsTotal[count])/ noOfStudents;
          }
                         return subjectAverageArray;
}

function subjectSummary(studentsResults,noOfStudents,noOfSubjects,subjectsTotal,subjectAverageArray) {
     
     for(let  count =0;count<noOfSubjects;count++){
          let  highestScore = studentsResults[0][count];
          let  lowestScore = studentsResults[0][count];
          let  highestScoringStudent = 1;
          let  lowestScoringStudent = 1;
          let  pass =0;
          let  fail =0;

               for (let  index=0;index<noOfStudents;index++){
                    let  result = studentsResults[index][count];

                    if(result >highestScore){
                         highestScore=result;
                         highestScoringStudent = index+1;
                    }
                    if (result <lowestScore){
                         lowestScore = result;
                         lowestScoringStudent = index+1;
                    }
                     if (result>= 50){
                         pass++;
                     }
                     else{
                         fail++;
                     }
               }
                     console.log();
                     console.log(`Subject ${count+1}`);
                     console.log(`Highest scoring Student is: Student ${highestScoringStudent} scoring ${highestScore}`);
                     console.log(`Lowest scoring Student is: Student ${lowestScoringStudent} scoring ${lowestScore}`);
                     console.log(`Number of passes: ${pass}`);
                     console.log(`Number of fails: ${fail}`);
                     console.log(`Total Score is: ${subjectsTotal[count]}`);
                     console.log(`Average Score is: ${subjectAverageArray[count].toFixed(2)}`);
                     console.log();

     }
}

function classSummary (totalArray,noOfStudents){
     let  sum =0;
     let  highest =totalArray[0];
     let  lowest = totalArray[0];
     let  highestScoringStudent = 1 ;
     let  lowestScoringStudent = 1;
     for (let  count=0;count<noOfStudents;count++){
           let  result = totalArray[count];
               sum += result;
                    if(result >highest){
                         highest=result;
                         highestScoringStudent = count+1;
                    }
                    if (result <lowest){
                         lowest = result;
                         lowestScoringStudent = count+1;
                    }
     }

     let classAverage = sum/noOfStudents

     console.log();
     console.log("CLASS SUMMARY");
     console.log("=".repeat(50));
     console.log(`Best Graduating Student is: Student ${highestScoringStudent} scoring ${highest}`);
     console.log("=".repeat(50));
     console.log();
     console.log("!".repeat(50));
     console.log(`Worst Graduating Student is: Student ${lowestScoringStudent} scoring ${lowest}`);
     console.log("!".repeat(50));
     console.log();
     console.log("=".repeat(50));
     console.log(`Class Total Score is: ${sum}`);
     console.log(`Class Average is: ${classAverage.toFixed(2)}`);
     console.log("=".repeat(50));
}

function hardestAndEasiest (studentsResults){
     let  highestScore = studentsResults[0][0];
     let  lowestScore = studentsResults[0][0];
     let highestScoringStudent =1;
     let  lowestScoringStudent =1;
     let  highestSubject=1;
     let  lowestSubject=1;
     let passArray = [];
     // let  passArray = new Array(studentsResults[0].length).fill(0);

     for (let student = 0; student < studentsResults[0].length; student++) {
    passArray[student] = 0;
     }
     
     for (let  count =0;count< studentsResults[0].length;count++){
          
          for(let  index=0;index<studentsResults.length;index++){
               let  result =studentsResults[index][count];

                if (result>= 50){
                         passArray[count] +=1;
                     }
               if(result >highestScore){
                         highestScore=result;
                         highestScoringStudent = index+1;
                         highestSubject=count+1;

                    }
                    if(result <lowestScore){
                         lowestScore = result;
                         lowestScoringStudent = index+1;
                         lowestSubject= count+1;
                    }
          }
     }
     let  highPass = passArray[0];
     let  highPassSubject = 1;
     let  lowPass = passArray[0];
     let  lowPassSubject=1; 

          for (let  element =0;element<passArray.length;element++){
               let  pass = passArray[element];
               if(pass >highPass){
                         highPass=pass;
                         highPassSubject = element+1;

                    }
                    if (pass <lowPass){
                         lowPass = pass;
                         lowPassSubject = element+1;
                         
          }
          }
                    let  failures = studentsResults.length - lowPass;

    console.log();
    console.log(`The Hardest subject is Subject ${lowPassSubject} with ${failures} failure(s)`);
    console.log(`The Easiest subject is Subject ${highPassSubject} with ${highPass} pass(es)`);
    console.log(`Overall Highest Score: Student ${highestScoringStudent} in Subject ${highestSubject} scoring ${highestScore}`);
    console.log(`Overall Lowest Score: Student ${lowestScoringStudent} in Subject ${lowestSubject} scoring ${lowestScore}`);
    console.log();
}
module.exports= {inputResults,totalPerStudent,averagePerStudent,position,totalPerSubject,subjectAverage,subjectSummary,classSummary,}
