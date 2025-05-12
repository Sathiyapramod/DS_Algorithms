/**
 * Given an two arrays, given to Set Union on the two arrays.
 * @param - [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11].
 * @return - Result [3, 1, 5, 7, 8, 10, 11]
 */

function union(left, right) {
  result = Array.from({ length: left.length + right.length });
  result = [...left];
  for (let i = 0; i < right.length; i++) {
    if (!result.includes(right[i])) result.push(right[i]);
  }
  return result;
}

console.log(union([3, 1, 5, 7, 8], [5, 1, 8, 10, 11]));
