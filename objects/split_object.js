/*
Write a Code for the below requirement 

Sample Inputs & Outputs

List1 = [1,2,3,4,5,6,7,8,9,10]and 
Split_Value = 3
Expected Output is (Split Like this)
[[1,2,3],[4,5,6],[7,8,9],[10]]


List1 = [1,2,3,4,5,6,7,8,9,10]and
Split_Value =  5 
Expected Output is (Split Like this)
[[1,2,3,4,5],[6,7,8,9,10]]

*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function split_list(n) {
  if (n == 0) return arr;
  else {
    const result = [];
    /*
      traverse through the list

      approach 1 - have left and right
      do upto len / n times
      for e.g.
      iteration1 -> left = 0 ; right = n
      iteration2 -> left = n+left; right = n+right
    
      */

    // finding number of splits
    let k = arr.length / n;
    // assigning pointers
    let left = 0,
      right = n;
    for (let i = 0; i <= k; i++) {
      const list = arr.slice(left, right);
      if (list.length !== 0) result.push(list);
      left = right;
      right += n;
    }
    console.log(result);
  }
}

split_list(3);
split_list(4);
split_list(5);
