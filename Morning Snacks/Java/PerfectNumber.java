import java.util.Scanner;     
     public class PerfectNumber{
     
     public static void main(String[]args){
                    
           Scanner input = new Scanner(System.in);
          System.out.print("Enter a number: ");

          int number = input.nextInt();
          
          int sumOfFactors = 0;
          int factors = 1;

     for (factors =1; factors< number; factors++){
          if( number%factors ==0){
          
          sumOfFactors += factors;
       
}
}     
          
            if(number ==sumOfFactors){
               System.out.print("The number is a perfect number.");
          }
          else{
                System.out.print("The number is not a perfect number.");}
         

                   
}

} 
