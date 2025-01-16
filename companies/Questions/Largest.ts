function Largest(list: number[]): number {
    if (list.length === 0) return -1;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}
