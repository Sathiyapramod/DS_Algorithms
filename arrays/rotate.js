// nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// approach -1
function rotate(nums, k) {
    if (!k || k === 0) return nums;

    let size = nums.length;

    // normalizing the k value if it exceeds more than the length
    k = k % size;

    const reverse = (left, right) => {
        while (left < right) {
            // swapping the left and right numbers
            const temp = nums[left];
            nums[left++] = nums[right];
            nums[right--] = temp;
        }
    };
    // reversing upto entire length of array
    reverse(0, size - 1);
    // reversing upto kth place
    reverse(0, k - 1);
    // reversing from kth place to (n-1)th place
    reverse(k, size - 1);

    return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 8));
console.log(rotate([-1, -100, 3, 99], 2));
