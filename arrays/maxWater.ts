function maxArea(height) {
    let i = 0,
        j = height.length - 1,
        res = 0;

    while (i < j) {
        const t = Math.min(height[i], height[j]) * (j - i);
        res = Math.max(res, t);
        if (height[i] < height[j]) i++;
        else j--;
    }
    console.log(res);
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([1, 1]);
