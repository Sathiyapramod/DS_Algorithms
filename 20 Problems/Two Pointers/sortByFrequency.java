
import java.util.*;

public class Solution {

    public static String frequencySort(String s) {
        // finding each character count;
        Map<Character, Integer> count = new HashMap<>();
        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        // finding max frequency
        int max_count = 0;
        for (int charCount : count.values()) {
            max_count = Math.max(max_count, charCount);
        }
        // making entries array using max_count;
        List<List<Character>> max_freq_arr = new ArrayList<>(max_count + 1);
        for (int i = 0; i <= max_count; i++) {
            max_freq_arr.add(new ArrayList<>());
        }

        // filling the frequency array
        for (Map.Entry<Character, Integer> entry : count.entrySet()) {
            char c = entry.getKey();
            int freq = entry.getValue();
            max_freq_arr.get(freq).add(c);
        }

        StringBuilder str = new StringBuilder();

        for (int freq = max_count; freq > 0; freq--) {
            List<Character> chars = max_freq_arr.get(freq);
            for (char c : chars) {
                for (int i = 0; i < freq; i++) {
                    str.append(c);
                }
            }
        }

        return str.toString();

    }

    public static void main(String[] args) {
        System.out.println(frequencySort("cccaaa"));
    }
}
