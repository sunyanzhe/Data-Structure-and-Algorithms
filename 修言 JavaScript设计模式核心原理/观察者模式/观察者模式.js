/**
 * 观察者模式有一个'别名',叫 发布订阅(之所以别名加了引号, 是因为两者之间存在着细微的差异)
 * 这个别名非常形象的诠释了观察者模式里两个核心的角色要素
 * 发布者和订阅者
 * 
 * 观察者模式定义了一种一对多的依赖关系
 * 让那个多个观察者对象同时监听某一个目标对象, 
 * 当这个目标对象的状态发生改变时, 会通知所有观察者对象
 * 使他们能够自动更新
 */

/**
 * 发布者的类, 应该具备以下功能
 * 1. 添加订阅者
 * 2. 通知订阅者
 * 3. 移除订阅者
 */

class Publisher {
  constructor() {
    this.observers = []
  }

  add(observer) {
    this.observers.push(observer)
  }

  remove(observer) {
    for (let i = 0; i < this.observers.length; i++) {
      if (observer === this.observers[i]) {
        this.observers.splice(i, 1)
        break
      }
    }
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }
}

class Observer {
  update(watcher) {
    console.log('update')
  }
}

/**
 * 以上 我们就完成了最基本的发布者和订阅类的设计和编写
 * 在实际的业务开发中, 我们所有的定制化的发布者/订阅者逻辑都可基于这两个类来改写
 * 比如我们可以通过拓展发布者类, 来时所有的订阅者来监听某个特定状态的变化
 * 比如 我们让开发者来监听需求文档的变化
 */

class PrdPublisher extends Publisher {
  constructor() {
    super()
    this.prdState = null
    this.observers = []
    console.log('PrdPublisher created')
  }

  getState() {
    return this.prdState
  }

  setState(state) {
    this.prdState = state
    this.notify()
  }

}

class DeveloperObserver extends Observer {
  constructor() {
    super()
    this.prdState = {}
  }
  update(publisher) {
    this.prdState = publisher.getState()
    this.work()
  }

  work() {
    const prd = this.prdState
    console.log('996 start')
  }
}

const liLei = new DeveloperObserver()

const A = new DeveloperObserver()
const B = new DeveloperObserver()

const hanMeiMei = new PrdPublisher()

hanMeiMei.add(liLei)
hanMeiMei.add(A)
hanMeiMei.add(B)
const prd = {
  a: '1111',
  b: '2222'
}
hanMeiMei.setState(prd)


/**
 * 以上就是观察者模式在代码世界的完整实现流程了
 */