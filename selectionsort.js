let arr = [64, 25, 12, 22, 11];

function selectionSort(arr){
    if(arr.length == 1) return arr;

    for(let i=0;i<arr.length;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++)
            if(arr[j] < arr[minIndex])
                minIndex = j;
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}

selectionSort(arr);