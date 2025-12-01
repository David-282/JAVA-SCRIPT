import java.util.Scanner;
     public class Factorial{
     public static void main(String[]args){
          Scanner input = new Scanner(System.in);
          System.out.print("Enter a number: ");

          int integer = input.nextInt();

          int factorial =1;     
          for(int count= 1; count <= integer; count++){

              System.out.print(count+" ");}
     }
}

