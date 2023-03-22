let arr = [15, 24, 30, 48, 49, 64, 86, 90, 100, 121, 130];

//Array needs to be in sorted Manner 
//returning the index of the Search Element using Bi-nary Search


let binarysearch = (arr,value)=>{
    if(arr.length < 1) return -1;
    let l = 0, r= arr.length-1;
    let mid;
    while(r>=l){
        mid = l+Math.floor((r-l)/2);
        if(arr[mid] == value)
            return mid;
        if(arr[mid] > value)
            r = mid -1;
        if(arr[mid] < value)
            l = mid +1;
    }
    return -1;
};
console.log(binarysearch(arr,122));