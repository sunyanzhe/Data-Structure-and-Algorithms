/**
 * 它应用于一些计算量较大的场景里
 * 这种场景下,我们需要空间换时间
 * 当我们需要用到某个已经计算过的值的时候
 * 不想再耗时进行二次计算, 而是希望能从缓存里面取出现成的结果
 * 这种场景下, 就需要一个代理来帮我们进行计算的同时 进行结果的缓存了
 * 
 */
// 对参数求和
const addAll = (...args) => {
  let result = 0
  for (let i of args) {
    result += i
  }
  return result
}

const proxyAddAll = (function() {
  let cache = {}
  return (...args) => {
    let keys = args.slice().sort().join(',')
    if (cache[keys]) return cache[keys]
    return cache[keys] = addAll(...args)
  }
})()