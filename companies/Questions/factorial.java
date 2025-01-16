package problems.factorial;

public class Factorial {

     public static int factorial(int x) {
          if (x < 1)
               return x;
          if (x == 1 || x == 2)
               return x;
          return x * factorial(x - 1);
     }

     public static void main(String[] args) {
          // finding factorial using recursion
          System.err.println(factorial(1));
          System.err.println(factorial(2));
          System.err.println(factorial(3));
          System.err.println(factorial(5));
     }
}
