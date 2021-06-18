function selectSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j
        }
        if (minIdx !== i) [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
    }
    return arr
}