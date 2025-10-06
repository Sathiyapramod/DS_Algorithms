/*
Mr.Stark wants to order the employee ids, which are recorded in a 2D matrix, in ascending order. 
He wants to do it so as to allot a new id to a person who joins as a fresher. 
You are the CTO of the Stark industries and you are asked by Mr.Stark to sort the data.

Input Description:
Dimensions of the matrix m and n, followed by the elements of the matrix.

Output Description:
Matrix sorted in ascending order

Sample Input :
3 3
87 21 34
89 32 78
12 23 45

Sample Output :
12 21 23
32 34 45
78 87 89
*/

function sortMatrix(m, n, list) {
  // perform flattening
  function flattening(list) {
    let result = [];
    let elem;
    for (let i = 0; i < list.length; i++) {
      if (Array.isArray(list[i])) {
        elem = flattening(list[i]);
        result.push(...elem);
      } else result.push(list[i]);
    }
    return result;
  }
  let result = flattening(list);
  // performing sorting
  result.sort((a, b) => a - b);
  let final = [];

  for (let i = 0; i <= result.length; i += n) {
    let temp = result.slice(i, i + n);
    if (temp.length > 0) final.push(temp);
  }
  return final;
}

console.log(
  sortMatrix(3, 3, [
    [87, 21, 34],
    [89, 32, 78],
    [12, 23, 45],
  ])
);
