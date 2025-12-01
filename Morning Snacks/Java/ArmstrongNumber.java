import java.util.Scanner;     
     public class ArmstrongNumber{
     
     public static void main(String[]args){
                    
           Scanner input = new Scanner(System.in);
          System.out.print("Enter a number: ");
          
          int number = input.nextInt();
          int numberLenght = String.valueOf(number).length();

          int digits = number;
          int sumOfPower =0;
          
     while(digits!=0){
               int seperateDigits = digits%10;
               double power= Math.pow(seperateDigits,numberLenght);
                    sumOfPower += power;
                    digits= digits/10;
          }
               if (sumOfPower==number){
                   System.out.print("The number is an Armstrong number");
          }
               else{
                     System.out.print("The number is not an Armstrong number");
}

}
}
