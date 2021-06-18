class EventEmitter {
  constructor() {
    this.headers = {}
  }
  on(eventName, cb) {
    if (!this.headers[eventName]) {
      this.headers[eventName] = []
    }
    this.headers[eventName].push(cb)
  }
  off(eventName, cb) {
    if (this.headers[eventName]) {
      let cbs = this.headers[eventName]
      let index = cbs.indexOf(cb)
      index > -1 && cbs.splice(index, 1)
    }
  }
  once(eventName, cb) {
    const wrap = (...args) => {
      cb(...args)
      this.off(eventName, wrap)
    }
    this.on(eventName, wrap)
  }
  emit(eventName, ...args) {
    if (this.headers[eventName]) {
      this.headers[eventName].forEach(cb => cb(...args))
    }
  }
}