let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function Kadanes(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  let maxStartindex = 0;
  let maxEndIndex = arr.length - 1;
  let currentStartIndex = 0;

  arr.forEach((currentElement, currentIndex) => {
    currentSum += currentElement;

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStartindex = currentStartIndex;
      maxEndIndex = currentIndex;
    }
    
    if (currentSum < 0) {
      currentSum = 0;
      currentStartIndex = currentIndex + 1;
    }
  });
  return arr.slice(maxStartindex, maxEndIndex + 1);
}

console.log(Kadanes(arr));
