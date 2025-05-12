function merged(a, b) {
  let ptr1 = 0,
    ptr2 = 0;
  let result = [];
  while (ptr1 < a.length && ptr2 < b.length) {
    if (a[ptr1] < b[ptr2]) {
      result.push(a[ptr1]);
      ptr1++;
    } else {
      result.push(b[ptr2]);
      ptr2++;
    }
  }
  while (ptr1 < a.length) {
    result.push(a[ptr1]);
    ptr1++;
  }
  while (ptr2 < b.length) {
    result.push(b[ptr2]);
    ptr2++;
  }
  return result;
}
console.log(merged([10, 20, 30, 40, 50], [15, 25, 35, 45, 55]));
console.log(merged([1, 2, 5], [2, 3, 5, 7, 9, 11]));
