let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function Kadanes(arr) {
  let subarrayStartIndex = 0,
    subarrayLength = 0,
    subarraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let arrLength = 1; arrLength <= arr.length - i; arrLength++) {
      sum += arr[i + (arrLength - 1)];
      // console.log(sum);
      if (subarraySum == 0 || sum > subarraySum) {
        subarrayStartIndex = i;
        subarrayLength = arrLength;
        subarraySum = sum;
      }
    }
  }
  return arr.slice(subarrayStartIndex, subarrayStartIndex + subarrayLength);
}

console.log(Kadanes(arr));
