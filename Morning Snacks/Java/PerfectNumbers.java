public class PerfectNumbers{ 
public static void main(String[]args){
                    
          int number = 1000; 
     for(int index=1;index<=number;index++){
               int sumOfFactors = 0;
     for (int factors =1; factors< index; factors++){
          if( index%factors ==0){
          
          sumOfFactors += factors;
       
}
}     
          
            if(sumOfFactors==index){
               System.out.print(index+" ");
          }
         
}
                   
}

} 





