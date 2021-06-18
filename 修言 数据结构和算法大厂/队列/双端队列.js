/**
 * 问题描述: 给定一个数组nums和活动窗口的大小k. 请找出所有滑动窗口的最大值
 */
/**
 * 1. 检查队尾元素, 看是不是都满足大于等于当前元素的条件. 如果是直接将当前元素入队, 否则将队尾元素逐个出队, 直到队尾元素大于等于当前元素为止
 * 2. 将当前元素入队
 * 3. 检查对头元素, 看对头元素是否已经被排除到滑动窗口之外, 如果是,出队
 * 4. 检查滑动窗口状态: 返回结果
 */

function maxSlidingWindow(nums, k) {
    const res = []
    const queue = []
    const len = nums.length
    for (let i = 0; i < len; i++ ) {
        while(queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop()
        }
        if (queue.length && queue[0] <= i - k) {
            queue.shift()
        }
        queue.push(i)
        if (i >= k - 1) {
            res.push(nums[queue[0]])
        }
    }
    return res;
}