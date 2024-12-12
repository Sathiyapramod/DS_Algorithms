// array length = 3
// input array={2,2,2}
// return -1 as only (2) same value exist
// if input array ={2,1,2}
// return 1

// naive approach
// time complexity - O(n log n)
function secondLargestNaive(arr) {
    // creating an unique array out of arr
    const uniqueArr = [...new Set(arr)];
    // sorting from descending
    uniqueArr.sort((a, b) => b - a);

    return uniqueArr[1];
}

// optimized approach
function secondLargest(arr) {
    let large = Number.NEGATIVE_INFINITY;
    let secondBig = Number.NEGATIVE_INFINITY;
    // [12, 35, 1, 10, 34, 1]

    // secondBig -> 34
    // large -> 35

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            // false
            secondBig = large; // 12
            large = arr[i]; // 35
        } else if (arr[i] !== large && arr[i] > secondBig) {
            // false
            secondBig = arr[i]; // 34
        }
    }

    return secondBig;
}

// secondLargest([1, 1, 2, 2, 3, 3, 4, 4]);
console.log(secondLargest([12, 35, 1, 10, 34, 1]));
