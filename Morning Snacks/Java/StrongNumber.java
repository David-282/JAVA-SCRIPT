import java.util.Scanner;     
     public class StrongNumber{
     
     public static void main(String[]args){
                    
           Scanner input = new Scanner(System.in);
          System.out.print("Enter a number: ");

          int number = input.nextInt();
          
        int digits = number;
        int sum = 0;

        while (digits != 0) {

            int productFactorial = 1;
            int separatingNumber = digits % 10;

            for (int index = 1; index <= separatingNumber; index++) {
                productFactorial *= index;
            }

            sum += productFactorial;

            digits = digits / 10; 
        }
               
        if (number == sum) {
            System.out.println("The number is a strong number");
        } else {
            System.out.println("The number is not a strong number");
        }







}
}

