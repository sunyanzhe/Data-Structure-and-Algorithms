/**
 * 给定一个整数数组nums和一个目标值target
 * 请你在该数组中找出和为目标值的那两个整数
 * 并返回它们的数组下标
 */

// 空间换时间, Map来帮忙
function twoSum(nums, target) {
    var map = {}
    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i]
        if (map.hasOwnproperty(key)) {
            return [map[key], i]
        }
        map[nums[i]] = i
    }
}