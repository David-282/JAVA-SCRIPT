 
public class ArmstrongNumbers{

    public static void main(String[] args) {

        int number = 1000;

        for (int count = 1; count <= number; count++) {

            int sumOfCube = 0;
            int digits = count;

            while (digits != 0) {
                int separateDigit = digits % 10;
                int cube = (int) Math.pow(separateDigit, 3);

                sumOfCube += cube;

                digits /= 10;
            }

            if (sumOfCube == count) {
                System.out.println(count);
            }
}      
  







    }
}

