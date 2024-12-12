// function fourSum(nums, target) {
//     nums.sort((a, b) => a - b);
//     let final = [];
//     if (nums.length < 4) return nums;
//     for (let i = 0; i < nums.length - 3; i++) {
//         for (let j = i + 1; j < nums.length - 2; j++) {
//             let k = j + 1;
//             let l = nums.length - 1;

//             while (k < l) {
//                 let sum = nums[i] + nums[j] + nums[k] + nums[l];
//                 if (sum === target) {
//                     let exist = false;
//                     let temp = [nums[i], nums[j], nums[k], nums[l]];
//                     final.forEach((e) => {
//                         if (
//                             e[0] == temp[0] &&
//                             e[1] == temp[1] &&
//                             e[2] == temp[2] &&
//                             e[3] == temp[3]
//                         ) {
//                             exist = true;
//                         }
//                     });
//                     if (!exist) final.push([nums[i], nums[j], nums[k], nums[l]]);
//                     l--;
//                 } else if (sum > target) {
//                     l--;
//                 } else {
//                     k++;
//                 }
//             }
//         }
//     }
//     return final;
// }

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([2, 2, 2, 2, 2], 8));

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}
