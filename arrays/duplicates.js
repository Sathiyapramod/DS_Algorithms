// input = [2,4,3,5,4,3,5,2]
// output = [2,4]

function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr[i] = arr[j];
      i++;
    }
  }
  return arr.splice(0, i + 1);
}

console.log(removeDuplicates([2, 4, 3, 5, 4, 3, 5, 2]));
