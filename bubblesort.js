function bubbleSort(arr){
    let swpd = true;
    do{
        swpd = false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                // perform swapping of numbers
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swpd = true;
            }
        }
    } while(swpd)
    return arr;
}

console.log(bubbleSort([64, 25, 12, 10, 11]));
