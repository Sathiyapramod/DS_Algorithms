// test case
// input list = [10,20,30,40,50] k=2
// output = [30,40,50,10,20]
function rotateList(list, k, isLeft) {
    var len = list.length;
    var result = [];
    // normalizing rotation counts
    // if k exceeds len also it should suffice
    k = k % len;
    for (var i = 0; i < len; i++) {
        var flag = isLeft ? (i + k) % len : (i - k + len) % len;
        result[i] = list[flag];
    }
    return result;
}
// rotateList([1, 2, 3, 4, 5, 6, 7], 3, false);
var rotate = function (nums, k) {
    var result = [];
    var n = nums.length;
    k = k % n;
    for (var i = 0; i < n; i++) {
        var flag = (i - k + n) % n;
        result[i] = nums[flag];
    }
    return result;
};
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([-1, -100, 3, 99], 2);
function circularRotation(list, k, queries) {
    var len = list.length;
    var result = [];
    var final = [];
    // normalizing rotation counts
    // if k exceeds len also it should suffice
    k = k % len;
    for (var i = 0; i < len; i++) {
        var flag = (i - k + len) % len;
        result[i] = list[flag];
    }
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var data = queries_1[_i];
        final.push(result[data]);
    }
    return result;
}
console.log(circularRotation([1, 2, 3], 2, [0, 1, 2]));
console.log(circularRotation([10, 11, 12, 13], 5, [0, 1, 2, 3]));
