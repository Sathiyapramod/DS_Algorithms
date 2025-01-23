
class Solution {

    public static void main(String[] args) {
        System.out.println(reverseStr("abcdefg", 2));
        System.out.println(reverseStr("abcd", 2));

    }

    public static String reverseStr(String s, int k) {
        /*
           * Given a string s and an integer k, reverse the first k characters 
           * for every 2k characters counting from the start of the string.
         */

        // steps
        // iterate through the string
        // step-1
        // for the first k (zero to k) , reverse the characters
        char[] str = s.toCharArray();
        for (int start = 0; start < s.length(); start += 2 * k) {
            int i = start;
            int j = Math.min(start + k - 1, s.length() - 1);
            while (i < j) {
                char temp = str[i];
                str[i++] = str[j];
                str[j--] = temp;
            }
        }
        return new String(str);

    }
}
