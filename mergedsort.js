let arr = [50,30,78,95,16,32,45,2];

//Time Complexity = O(n log n);

function mergedsort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergedsort(arr.slice(0, mid));
  let right = mergedsort(arr.slice(mid));
  function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) sortedArr.push(left.shift());
      else sortedArr.push(right.shift());
    }
    return [...sortedArr, ...left, ...right];
  }
  return merge(left, right);
}
console.log(mergedsort(arr));
