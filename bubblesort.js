let arr = [64, 25, 12, 10, 11];


function bubbleSort(arr){

for(let i=0;i<arr.length;i++)
    for(let j=0;j<(arr.length-i-1);j++)
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
return (arr);
}

console.log(bubbleSort(arr));