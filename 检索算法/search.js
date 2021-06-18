//二分算法
function binSearch(arr, data) {
    let upper = arr.length - 1,
        lower = 0,
        mid = 0;
    while (lower <= upper) {
        mid = Math.floor((upper + lower) / 2);
        if (arr[mid] > data) {
            upper = mid - 1;
        } else if (arr[mid] < data) {
            lower = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}