function quickSort(arr, left = 0, right = arr.length) {
    if (arr.length > 1) {
        const nextPivot = partition(arr, left, right);
        if (left < nextPivot - 1) {
            quickSort(arr, left, nextPivot)
        }
        if (right > nextPivot) {
            quickSort(arr, nextPivot, right)
        }
    }
    return arr;
}

function partition(arr, left, right) {
    let i = left, j = right,
        pivot = (left + right) >> 1;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--;          
        }
    }
    return i;
}