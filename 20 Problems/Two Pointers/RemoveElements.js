/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The order of the elements may be changed.
Then return the number of elements in nums which are not equal to val.
*/
function removeElement(nums, val) {
    // initialize a count (ptr) variable to check the count
    // iterate throughout the array
    // // if elm === val , increment the count & replace with dummy var(if required)
    //   //  finally return the value as result = nums.length - count
    // case 1
    // [3,2,2,3]
    // val = 3
    // count = 1;
    // modified list -> [3,2,2,3];
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        // check each element & increment count;
        if (nums[i] !== val) {
            nums[count++] = nums[i]; // change the occurrence of the variable to the last
        }
        console.log("modified list is ->", nums);
    }
    return count;
}
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
// test cases
/*
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
*/
/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/
