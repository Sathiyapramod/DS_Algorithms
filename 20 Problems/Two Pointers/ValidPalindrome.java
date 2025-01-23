class ValidPalindrome {
     public static boolean validPalindrome(String s) {
          int left = 0;
          int right = s.length() - 1;

          while (left < right) {
               if (s.charAt(left) != s.charAt(right)) {
                    return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
               }
               left++;
               right--;
          }
          return true;
     }

     public static boolean isPalindrome(String s, int left, int right) {
          while (left < right) {
               if (s.charAt(left) != s.charAt(right))
                    return false;
               left++;
               right--;
          }
          return true;
     }

     public static void main(String[] args) {
          System.out.println(validPalindrome("abc"));
          System.out.println(validPalindrome("abca"));
          System.out.println(validPalindrome("aba"));
     }
}

/*
 * Input: s = "aba"
 * Output: true
 */

/*
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 */

/*
 * Input: s = "abc"
 * Output: false
 */
