/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.
*/

function calculateCurrent(arr) {
  /*
  create an array of length (length = largest element in the 'arr')
  with its index -> increment its count
  
   */

  const len = arr.length;
  const limit = Math.max(...arr);
  let countArray = new Array(limit + 1).fill(0);

  for (let i = 0; i < len; i++) countArray[arr[i]]++;

  console.log(countArray);
  let prevCount = 0;
  for (let i = 0; i <= limit; i++) {
    if (countArray[i]) {
      let curr = countArray[i];
      countArray[i] = prevCount;
      prevCount += curr;
    }
  }

  console.log(countArray);
  let smaller = [];
  for (let i = 0; i < len; i++) {
    smaller.push(countArray[arr[i]]);
  }
  return smaller;
}

console.log(calculateCurrent([8, 1, 2, 2, 3])); // expected output: [4,0,1,1,3]
console.log(calculateCurrent([6, 5, 4, 8])); // expected output : [2,1,0,3]
console.log(calculateCurrent([7, 7, 7, 7])); // expected output: [0,0,0,0]
