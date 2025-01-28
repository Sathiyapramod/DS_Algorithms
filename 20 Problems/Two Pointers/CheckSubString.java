
public class CheckSubString {

     public static int stringMatch(String text, String pattern) {
         int n = text.length();
         int m = pattern.length();
         if (m > n) {
             return -1;
         }
 
         // text => "this is a test text"
         // pattern => "text"
         // returning the first occurrence of substring
         for (int i = 0; i <= n - m; i++) {
             int j = 0;
 
             while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
                 j = j + 1;
             }
             if (j == m) {
                 return i;
             }
         }
         return -1;
     }
 
     public static void main(String[] args) {
         int result = stringMatch("this is a test test", "test");
         System.out.println(result);
     }
 }
 
