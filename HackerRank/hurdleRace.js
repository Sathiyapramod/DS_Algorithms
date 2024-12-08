function hurdleRace(k, height) {
    // Write your code here
    height.sort((a, b) => b - a);
    if (height[0] < k) return 0;
    return height[0] - k;
}

console.log(hurdleRace(7, [2, 5, 4, 5, 2]));
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
