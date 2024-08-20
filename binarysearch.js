let arr = [15, 24, 30, 48, 49, 64, 86, 90, 100, 121, 130];

//Array needs to be in sorted Manner 
//returning the index of the Search Element using Bi-nary Search


let binarysearch = (arr,value)=>{
    // basic guard checks
    if(arr.length < 1) return -1;
    // assigning indices
    let l = 0, r= arr.length-1;
    let mid;
    // loop and check
    while(r>=l){
        // take center element
        mid = l+Math.floor((r-l)/2);
        // find if value exists at middle index
        if(arr[mid] == value)
            return mid;
        // if value is lesser than middle
        // shift right index to middle - 1
        if(arr[mid] > value)
            r = mid -1;
        // if value is greater than middle 
        // shift left index to middle + 1
        if(arr[mid] < value)
            l = mid +1;
    }
    return -1;
};

console.log(binarysearch(arr,122));
