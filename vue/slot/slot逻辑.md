
# 例子
```vue
<!-- parent -->
<div><foo><p>slotContent</p></foo></div>

<!-- foo -->
<div><slot></slot></div>

```

# 逻辑
先`new Vue`, 然后生命钩子，处理options，开始`mountCompoenent`，通过`compiler`, 开始走`_createElement`。
这里的就很正常，`p`会变成`foo`的`children`。
接下来是关键，`foo`是component，会走createComponent，`vnode`中的`children`，也就是`p`会变成，`componentOptions`中的`children`。

然后开始Vue的`patch`, patchChildren时，会`patch`到`foo`的`vnode`。
`foo`是`component`所以有`hook`，走`hook.init`。`new VueComponent`。
然后又是生命钩子， 然后处理option，这是会走`initRender`。拿到`children`，进行`resolveSlot`，给`VueComponent`的`$slots`赋值。
然后开始`compiler`解析`foo`的`template`。 
因为`foo`有`slot`标签，`compiler`会给他添加一个函数叫做`resolveSlot`, 这个方法会去`$slot`去找有没有对应的`vnode`，有的话就把`slot`中的`vnode`替换一下
然后在开始patch

之后就是基础逻辑了


# 更新

假设是父级的`Watcher`更新了。
还是一样的，也是重新生成`vnode`，然后还是`patch`了， 这次就不是简单的创建了，是`patchNode`。
这时发现`foo`有`hook`，是`component`，走`hook.prepatch`。
通过旧的`vnode.componentInstance`可以拿到`VueComponent`实例，进而能拿到`$slots`.
判断有没有`slot`，如果有直接`vm.$forceUpdate()`，更新`foo`的渲染`Watcher`
