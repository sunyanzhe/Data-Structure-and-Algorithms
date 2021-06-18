let uid = 0
class Dep {
  static target = null
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  removeSub(sub) {
    let index = this.subs.indexOf(sub)
    this.subs.splice(index, 1)
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  notify() {
    let subs = this.subs
    for (let sub of subs) {
      sub[i].update()
    }
  }
}

let targetStack = []
const pushTarget = (_target) => {
  Dep.target && targetStack.push(Dep.target)
  Dep.target = _target
}

const popTarget = () => Dep.target = targetStack.pop()

const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'slice',
  'sort',
  'splice'
]

methodsToPatch.forEach(method => {
  let original = arrayProto[method]
  Object.defineProperty(arrayMethods, method, function mutator(...args) {
    let result = original.apply(this, args)
    let ob = this.__ob__
    let insert
    switch (method) {
      case 'push':
      case 'unshift':
        insert = args
        break;
      case 'splice':
        insert = args.slice(2)
        break;
    }
    if (insert) ob.observeArray(insert)
    ob.dep.notify()
    return result
  })
})


class Observer {
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0

    def(value, '__ob__', this)
    
    if (Array.isArray(value)) {
      value.__proto__ = arrayMethods
      this.observeArray(value)
    } else {
      this.walk(value);
    }
  }
  observeArray(value) {
    for (let item of value) observe(item)
  }
  walk(value) {
    for (let key of Object.keys(value)) {
      defineReactive(value, key)
    }
  }
}

function observe(value, asRootData) {
  if (typeof value !== 'object') return
  let ob
  if (vaue.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else if (
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value)
  ) {
    ob = new Observer(value)
  }
  if (asRootData && ob) ob.vmCount++
  return ob
}

function defineReactive(obj, key, val, customSetter, shallow) {
  let dep = new Dep()
  
  let property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) return
  let setter = property && property.set
  let getter = property && property.get

  if (!getter && arguments.length === 2) val = obj[key]
  let childOb = !shallow && new Observer(val)

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      var value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value))
        }
      }
    }
  })
}

function walk(obj) {
  for (let key of Object.keys(obj)) {
    defineReactive(obj, key, obj[key])
  }
}

function defineReactive(obj, key, val) {
  if (typeof val === 'object') {
    walk(val)
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(key)
      return val
    },
    set(value) {
      console.log('set===' + key)
      val = value
    }
  })
}