// test case
// input list = [10,20,30,40,50] k=2
// output = [30,40,50,10,20]

function rotateList(list: number[], k: number, isLeft: boolean): number[] {
    const len = list.length as number;
    const result: number[] = [];
    // normalizing rotation counts
    // if k exceeds len also it should suffice
    k = k % len;
    for (let i = 0; i < len; i++) {
        const flag = isLeft ? (i + k) % len : (i - k + len) % len;

        result[i] = list[flag];
    }
    return result;
}

// rotateList([1, 2, 3, 4, 5, 6, 7], 3, false);

const rotate = function (nums, k): number[] {
    const result: number[] = [];
    const n = nums.length;
    k = k % n;

    for (let i = 0; i < n; i++) {
        const flag = (i - k + n) % n;
        result[i] = nums[flag];
    }
    return result;
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([-1, -100, 3, 99], 2);
