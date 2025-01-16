package problems.inversion;

public class Inversion {

     public static int findInversion(int[] list) {
          int count = 0;
          int n = list.length;

          for (int i = 0; i < n - 1; i++) {
               for (int j = i + 1; j < n; j++) {
                    if (list[i] > list[j]) {
                         count++;
                    }
               }
          }
          return count;
     }

     public static void main(String[] args) {
          int[] list1 = { 1, 4, 6, 3 };
          int[] list2 = { 4, 3, 2, 1 };

          System.out.println((findInversion(list1)));
          System.out.println((findInversion(list2)));

     }
}
