function threeSum(nums) {
    nums.sort((a, b) => a - b);

    let final = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            // finding three sum
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                final.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
    }
    return final;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
