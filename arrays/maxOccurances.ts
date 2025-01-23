/*
input = [4, 1, 5, 2, 1, 5, 9, 8, 6, 5, 3, 2, 4, 7]
output = 3
*/

function maxCount(list: number[]): number {
    if (list.length === 0) return -1;
    // concept
    // traverse through each element
    // count the occurrences & store

    let maxCount = 0;
    let el = 0;
    let count = new Map<number, number>();

    for (const member of list) {
        const curr = (count.get(member) || 0) + 1;
        count.set(member, curr);
        maxCount = Math.max(curr, maxCount);
    }
    return maxCount;
}

console.log(maxCount([4, 1, 5, 2, 1, 5, 9, 8, 6, 5, 3, 2, 4, 7]));
