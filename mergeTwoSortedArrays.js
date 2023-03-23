let a = [10,20,30,40,50];
let b = [15,25,35,45,55];

function merged(a,b){
    return [...a,...b]
}
console.log(merged(a,b));