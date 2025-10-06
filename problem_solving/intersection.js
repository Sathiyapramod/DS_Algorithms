/**
 * Given an two arrays,
 * @param - [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11]
 * given to Set Intersection on the two arrays
 * @result - Result [1, 5, 8]
 */

function intersection(left, right) {
  const result = [];
  for (let i = 0; i < left.length; i++) {
    if (right.includes(left[i])) {
      result.push(left[i]);
    }
  }
  return result;
}

console.log(intersection([3, 1, 5, 7, 8], [5, 1, 8, 10, 11]));
