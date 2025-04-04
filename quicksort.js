let arr = [5,4,3,9,8,5,4,-1];


//Time complexity = O(n^2)
let quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];

  let left = [],right = [];

  for (var i = 0; i < arr.length; i++)
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);

  return quickSort(left).concat([pivot],quickSort(right));
};

console.log(quickSort(arr));
