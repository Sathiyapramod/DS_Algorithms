function numSubseq(nums, target) {
    const MOD = 10 ** 9 + 7;
    nums.sort((a, b) => a - b);

    let n = nums.length;
    const pow = new Array(n).fill(1);

    for (let index = 1; index < n; index++) {
        pow[index] = (pow[index - 1] * 2) % MOD;
    }

    let left = 0;
    let right = n - 1;
    let count = 0;

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            count = (count + pow[right - left]) % MOD;
            left++;
        } else right--;
    }
    return count;
}

console.log(numSubseq([3, 5, 7, 8], 9));
console.log(numSubseq([3, 3, 6, 8], 10));
