let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function KadanesSum(arr){
    function solveRecursively(elementIndex, mustPick){
        if(elementIndex >= arr.length)
            return mustPick ? 0 : -Infinity;
        return Math.max(
            arr[elementIndex] + solveRecursively(elementIndex+1,true),
            mustPick ? 0: solveRecursively(elementIndex +1, false)
        )
    }
    return solveRecursively(0,false)
}
console.log(KadanesSum(arr));