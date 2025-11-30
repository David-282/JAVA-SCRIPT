import java.util.Scanner;     
     public class ArmstrongNumber{
     
     public static void main(String[]args){
                    
           Scanner input = new Scanner(System.in);
          System.out.print("Enter a number: ");

          int number = input.nextInt();
          int digits = number;
          int sumOfCube =0;
          
     while(digits!=0){
               int seperateDigits = digits%10;
               double cube= Math.pow(seperateDigits,3);
                    sumOfCube += cube;
                    digits= digits/10;
          }
               if (sumOfCube==number){
                   System.out.print("The number is an Armstrong number");
          }
               else{
                     System.out.print("The number is not an Armstrong number");
}

}
}
