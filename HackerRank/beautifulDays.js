function beautifulDays(i, j, k) {
    // Write your code
    let count = 0;
    for (let st = i; st <= j; st++) {
        let nr = st.toString();
        let rev = st.toString().split("").reverse().join("");
        let flag = (Number(nr) - Number(rev)) % k;
        if (flag !== 0) continue;
        else count++;
    }
    return count;
}

console.log(beautifulDays(20, 23, 6));
