let arr = [50, 30, 78, 95, 16, 32, 45, 2];
//Time Complexity = O(n log n);
function mergedsort(list) {
    if (list.length < 2) return list;

    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);

    // recursively make sorting
    return list;
}

function merge(left, right) {
    const result = [];
    let i = 0,
        j = 0;

    // merging the left and right arrays
    while ((i < left.length) & (j < right.length)) {
        if (left[i] <= right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    // fill the remaining elements
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
}
console.log(mergedsort(arr));
