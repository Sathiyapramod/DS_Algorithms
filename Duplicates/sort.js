let arr = [3,1,8,8,1,8];
//required output = [3,1,1,8,8,8]

//Counting Occurances of Elements in an Array
let count={}
for(const element of arr){
    if(count[element])
        count[element]+= 1;
    else
        count[element] = 1
}
console.log(count);
