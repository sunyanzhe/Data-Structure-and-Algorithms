/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，
 * 使 nums1 成为一个有序数组。
 */

const merge = function(nums1, m, nums2, n) {
    // 初始化两个指针的指向，初始化 nums1 尾部索引k
    let i = m - 1, j = n - 1, k = m + n - 1
    // 当两个数组都没遍历完时，指针同步移动
    while (i >= 0 && j >= 0) {
        if (num1[i] >= nums2[j]) {
            nums1[k] = num1[i--]
        } else {
            nums1[k] = nums2[j--]
        }
        k--
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }
};