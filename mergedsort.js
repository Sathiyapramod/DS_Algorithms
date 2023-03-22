let arr = [5, 4, 3, 9, 8, 5, 4, -1];

function mergedsort(arr) {
  if (arr.length <= 1) return arr;
  let left = 0;
  let right = arr.length - 1;
  if (left >= right) return;
  let middle = left + Math.floor((right - left) / 2);
  
}
mergedsort(arr);
