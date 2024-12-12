//input = [10,20,30,40,40,50,50,80]
// output = 50

function second(arr) {
    // creating a new set
    const sorted = Array.from(new Set(arr));

    let l = -Number.MAX_VALUE;
    let s = -Number.MAX_VALUE;

    for (let i = 0; i < sorted.length; i++) {
        if (l < sorted[i]) {
            s = l;
            l = sorted[i];
        } else if (sorted[i] !== l && sorted[i] > s) {
            s = sorted[i];
        }
    }

    return s;
}

console.log(second([10, 20, 30, 40, 40, 50, 50, 80]));
