function findDuplicates(nums: number[]): number[] {
    // traverse through the array,
    // check each numbers occurrence,
    // if occurrence is more than 1, push it to dup list
    // else proceed to next number
    const duplicates: number[] = [];

    // iteration -> [1,2,3,2,4,5,4,5];

    // index = 4;
    // duplicates = [2,4,5]
    // nums = [-1,-2,-3,-2,-4,-5,4,5];

    for (let i = 0; i < nums.length; i++) {
        let index = (Math.abs(nums[i]) - 1) as number;
        // check condition
        if (nums[index] < 0) duplicates.push(index + 1);
        // tag each element as seen
        nums[index] = nums[index] * -1;
    }

    return duplicates;
}

// test cases
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 4, 5]));
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
