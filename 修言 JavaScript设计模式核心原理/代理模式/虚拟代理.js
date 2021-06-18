/**
 * 实现图片预加载操作
 * 预加载主要是为了让这个img标签展示一个占位图
 * 然后创建一个Image实例, 让这个Image实例的src指向真是的目标图片地址 观察该Image实例的加载情况
 * 当其对应的真实图片加载完毕后, 即已经有了该图片的缓存内容, 再将DOM上的img元素的src指向真实的目标图片地址
 * 此时我们直接去取了目标图片的缓存, 所以展示速度非常快, 从占位符到目标图片的时间差会非常小 小道用户注意不到 这样体验就非常好了
 */
// 按照以下思路实现的第一版
class PreLoadImage {
  // 占位符的url地址
  static LOADING_URL = 'default.jpg'

  constructor(imgNode) {
    // 获取该实例对应的DOM节点
    this.imgNode = imgNode
  }
  setSrc(targetUrl) {
    this.imgNode.src = PreLoadImage.LOADING_URL
    const img = new Image()
    img.src = targetUrl
    img.onload = () => {
      this.imgNode.src = targetUrl
    }
  }
}

/** 
 * 这个PreLoadImage乍一看没问题, 但是其实违反了我们设计原则中的单一职责原则
 * PreLoadImage不仅要负责图片的加载, 还要负责DOM层面的操作()
 * 这样一来, 就出现了两个可能导致这个类发生变化的原因
*/
/**
 * 好的做法是将这两个逻辑分离, 让PreLoadImage专心做DOM层面的事情(真实DOM节点的获取、img节点的连结设置)
 * 再找一个对象来专门搞加载
 */
class PreLoadImage {
  constructor(imgNode) {
    this.imgNode = imgNode
  }
  serSrc(src) {
    this.imgNode.src = src
  }
}

class ProxyImage {
  static LOADING_URL = 'default.jpg'

  constructor(targetImage) {
    this.targetImage = targetImage
  }

  setSrc(targetUrl) {
    this.targetImage.setSrc(ProxyImage.LOADING_URL)
    const img = new Image()
    img.src = targetUrl
    img.onload = () => {
      this.targetImage.src = targetUrl
    }
  }
}