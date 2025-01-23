public class Solution {
     public static char[] reverseString(char[] s) {
          int left = 0;
          int right = s.length - 1;

          while (left < right) {
               char temp = s[left];
               s[left++] = s[right];
               s[right--] = temp;
          }
          return s;
     }

     public static void main(String[] args) {
          // char[] s = new char[] { 'h', 'e', 'l', 'l', 'o' };
          char[] s = new char[] { 'H', 'a', 'n', 'n', 'a', 'h' };

          System.out.println(reverseString(s));
     }
}
