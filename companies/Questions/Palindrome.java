package problems.palindrome;

public class Palindrome {

     public static boolean checkPalindrome(String str) {
          int len = str.length();
          for (int i = 0; i < len / 2; i++) {
               if (str.charAt(i) != str.charAt(len - i - 1)) {
                    return false;
               }
          }
          return true;
     }

     public static void main(String[] args) {
          System.out.println("Results are shown below");
          System.out.println(checkPalindrome("abba"));
          System.out.println(checkPalindrome("malayalam"));
          System.out.println(checkPalindrome("abc123"));

     }
}
