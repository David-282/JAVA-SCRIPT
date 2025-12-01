 
public class ArmstrongNumbers{

    public static void main(String[] args) {


        for (int count = 1; count <= 1000; count++) {
        int sumOfPower = 0;

            int digits = count;
            int numberLenght = String.valueOf(digits).length();

            while (digits != 0) {
                int separateDigit = digits % 10;
                double power= Math.pow(separateDigit, numberLenght);

                sumOfPower += power;

                digits /= 10;
            }

            if (sumOfPower == count) {
                System.out.println(count);
            }

}      
  







    }
}

