function mergeArr(arr1, arr2) {
    let i = 0, 
        j = 0, 
        len1 = arr1.length, 
        len2 = arr2.length,
        result = [];
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    if(i<len1) {
        return result.concat(arr1.slice(i))
    } else {
        return result.concat(arr2.slice(j))
    }
}

  
function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) return arr;
    const mid = len >> 1,
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid,len));
    return mergeArr(left, right);
};
