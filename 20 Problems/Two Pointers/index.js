// two sum part ii

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum < target) left++; // increasing left pointer
        else if (sum > target) {
            right--;
        } // decreasing right pointer
        else return [left + 1, right + 1];
    }
    return [-1, -1];
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));
// console.log(twoSum([-1, 0], -1));
console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
