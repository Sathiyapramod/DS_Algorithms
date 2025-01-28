// test case
// input list = [10,20,30,40,50] k=2
// output = [30,40,50,10,20]

function rotateList(list, k, isLeft) {
    const len = list.length;
    const result = [];
    // normalizing rotation counts
    // if k exceeds len also it should suffice
    k = k % len;
    for (let i = 0; i < len; i++) {
        const flag = isLeft ? (i + k) % len : (i - k + len) % len;

        result[i] = list[flag];
    }
    console.log(result);
}

// rotateList([1, 2, 3, 4, 5, 6, 7], 3, false);

var rotate = function (nums, k) {
    const result = [];
    const n = nums.length;
    k = k % n;

    for (let i = 0; i < n; i++) {
        const flag = (i - k + n) % n;
        result[i] = nums[flag];
    }
    console.log(result);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
