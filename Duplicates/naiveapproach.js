//UsingindexOf method
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

function duplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  }
  return result;
}
// console.log(duplicates(arr));


//Using Filter method
console.log(arr.filter((element,index)=>{return arr.indexOf(element) === index}));
