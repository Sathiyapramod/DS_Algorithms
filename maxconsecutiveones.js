let arr = [0,0,1,1,0,0,0,1,1,1];

let maxArray = (arr)=>{
    if(arr.length <= 1) return 1;
    let count=0,result=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 0)
            count=0;
        else{
            count++;
            result = Math.max(result,count);
        }
    }
    return result;

};
console.log(maxArray(arr));