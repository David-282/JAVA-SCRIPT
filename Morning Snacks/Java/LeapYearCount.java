public class LeapYearCount {
    public static void main(String[] args) {

        int index = 0;
        for (int year = 1900; year <= 2025; year++) {

            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                index++;
            }
        }

        System.out.println(index); 
    }
}

