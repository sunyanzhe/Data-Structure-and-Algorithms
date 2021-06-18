var uid = 0
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
function def(obj,key,val,enumerable) {
  Object.defineProperty(obj, key, {
    value:val,
    enumerable: !!enumerable,
    configurable: true,
    writable: true
  })
}
function isPlainObject(obj) {
  //判断是否是对象
  return _toString.call(obj) === '[object Object]'
}
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item)
    if (index > -1) return arr.splice(index, 1)
  }
}
class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  removeSub(sub) {
    remove(this.subs, sub)
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  notify() {
    let subs = this.subs.slice()
    for (let i = 0; i < subs.length; i++) {
      subs[i].update()
    }
  }
}
Dep.target = null

let targetStack = []
function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

function popTarget() {
  Dep.target = targetStack.pop()
}


class VNode {
  constructor(
              tag, // 节点标签名
              data, // 节点对应的对象, 包含了具体的一些数据信息, 是一个VNodeData类型,
              children, // 子节点
              text, // 文本
              elm, // 当前dom
              context, // 编译作用域
              componentOptions, // 组件的option选项
              asyncFactory // 异步工厂
              ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    // 当前节点命名空间
    this.ns = undefined
  
    this.context = context

    this.fnContext = undefined
    this.fnOptions = undefined
    this.fnScopeId = undefined

    this.key = data && data.key
    this.componentOptions = componentOptions

    // 当前节点对应的组件实例
    this.componentInstance = undefined

    // 父节点
    this.parent = undefined
    // 是否是innerHTML
    this.raw = false
    // 静态节点标志
    this.isStatic = false
    // 是否作为根节点插入
    this.isRootInsert = true
    // 是否是注释节点
    this.isComment = false
    // 是否是克隆节点
    this.isClone = false
    // 是否有v-once指令
    this.isOnce = false

    this.asyncFactory = asyncFactory

    this.asyncMeta = undefined
    this.isAsyncePlaceholder = false
  }
}

var prototypeAccessors = { child: {configurable: true} }
prototypeAccessors.child.get = function() {
  return this.componentInstance
}

Object.defineProperties(VNode.prototype, prototypeAccessors)

function createEmptyVNode(text) {
  if (text === void 0) text = ''
  var node = new VNode()
  node.text = text
  node.isComment = true
  return node
}

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

function cloneVNode(vnode, deep) {
  var componentOptions = vnode.componentOptions
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.isClone = true
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true)
    }
    if (componentOptions && componentOptions) {
      componentOptions.children = cloneVNode(componentOptions.children, true)
    }
  }
  return cloned
}

function cloneVNodes(vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len)
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep)
  }
  return res
}

var arrayProto = Array.prototype
var arrayMethods = Object.create(arrayProto)

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]


methodsToPatch.forEach(method => {
  var original = arrayProto[method]
  def(arrayMethods, method, function mutator() {
    var args = [], len = arguments.length;
    while(len--) args[len] = arguments[len]

    var result = original.apply(this, args)
    var ob = this.__ob__

    var inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break;
      case 'splice':
        inserted = args.slice(2)
      default:
        break;
    }
    if (inserted) {
      ob.observeArray(inserted)
    }
    ob.dep.notify()
    return result
  })
})

var arrayKeys = Object.getOwnPropertyNames(arrayMethods)



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
      this.walk(value)
    }
  }
  
  walk(obj) {
    var keys = Object.keys(obj)
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, key[i])
    }
  }

  observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }
}

var shouldObserve = true
function toggleObserving(value) {
  shouldObserve = false
}

function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) return
  var ob

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value)
  }
  if (asRootData && ob) ob.vmCount++
  return ob
}

function defineReactive(obj,  // 对象
                        key,  // 对象的key
                        val,  // 监听的数据 返回的数据
                        customSetter, // 日志函数
                        shallow // 是否添加__ob__属性
) {
  var dep = new Dep()
  var property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) return

  var getter = property && property.get
  if (!getter && arguments.length == 2) val = obj[key]
  
  var setter = property && property.set
  var childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function rectiveGetter() {
      var value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if(Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val
      if (newVal === value || (newVal !== newVal && value !== value)) return
      if ('development' && customSetter) customSetter()
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }

      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}