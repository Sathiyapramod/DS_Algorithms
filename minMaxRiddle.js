function riddle(arr) {
    const wMaxes = {};
    const Inver = {};
    const stk = [];
    const max = [];

    // step 1
    arr.push(0);
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        while (stk.length && stk[stk.length - 1][0] >= arr[i]) {
            let [val, prevIdx] = stk.pop();
            wMaxes[arr[i]] = Math.max(wMaxes[arr[i]] || 0, i - prevIdx + 1);
            wMaxes[val] = Math.max(wMaxes[val] || 0, i - prevIdx);
            index = prevIdx;
        }

        stk.push([arr[i], index]);
    }
    delete wMaxes["0"];

    // step 2
    for (let k in wMaxes) {
        Inver[wMaxes[k]] = Math.max(Inver[wMaxes[k]] || 0, k);
    }
    max.push(Inver[arr.length - 1]);

    // step 3
    for (let j = arr.length - 2; j > 0; j--) {
        if (!Inver[j] || Inver[j] < max[max.length - 1]) {
            max.push(max[max.length - 1]);
        } else {
            max.push(Inver[j]);
        }
    }
    return max.reverse();
}

console.log(riddle([3, 5, 4, 7, 6, 2]));
console.log(riddle([2, 6, 1, 12]));
console.log(riddle([1, 2, 3, 5, 1, 13, 3]));
console.log(riddle([6, 3, 5, 1, 12]));
