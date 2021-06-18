/**
 * 真题描述：给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 
 * 请你找出所有满足条件且不重复的三元组。
 */

function threeSum(nums, target) {
    // 从小到大排序
    nums = nums.sort((a, b) => a - b)
    var len = nums.len
    var result = []
    for (let i = 0; i < len - 2; i++) {
        let cur = nums[i];
        if (cur === nums[i - 1]) continue
        let j = i + 1,
            k = len - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] < target) {
                j++
                while (j < k && nums[j - 1] === nums[j]) j++
            } else if (nums[i] + nums[j] + nums[k] > target) {
                k--
                while (j < k && nums[k] === nums[k + 1]) k --
            } else {
                result.push([cur, nums[j], nums[k]])
                k--;
                j++;
                // 若左指针元素重复，跳过
                while(j<k&&nums[j]===nums[j-1]) {
                    j++
                }  
               
               // 若右指针元素重复，跳过
               while(j<k&&nums[k]===nums[k+1]) {
                    k--
                }
            }
        }
    }
    return result
}