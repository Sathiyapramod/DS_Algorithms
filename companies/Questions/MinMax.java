package problems.Largest;

public class Largest {

     public static int findLargest(int[] list) {
          int max = Integer.MIN_VALUE;
          for (int i = 0; i < list.length; i++) {
               if (list[i] > max) {
                    max = list[i];
               }
          }
          return max;
     }

     public static int findSmallest(int[] list) {
          int min = Integer.MAX_VALUE;
          for (int i = 0; i < list.length; i++) {
               if (list[i] < min) {
                    min = list[i];
               }
          }
          return min;
     }

     public static void main(String[] args) {
          int[] list1 = { 10, 50, 40, 89, 31 };
          System.out.println(findLargest(list1));
          System.out.println(findSmallest(list1));

     }
}
