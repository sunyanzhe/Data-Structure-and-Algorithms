`vue`默认的指令有
1. v-if
2. v-show
3. v-model
4. v-on=
5. v-bind=


其中真正的指令，只有v-model和v-show

在createElm之后，所有的vnode都会走invokeCreateHooks这个方法。
这个方法里面有个updateDirective方法

bind的话就会直接执行其注册的方法
insert的话 就会给当前vnode的hook中加入一个insert的hook。

最后到patch结束后，统一走insertHook的时候，在执行insert的hook，v-model就是这样。

值得注意的是，v-model会在compositionStart的时候阻止input的事件，并在compositionEnd的时候自定义一个input的事件并且，Dispatch出去


# component 中的 v-model
对于component来说，在parseHTML中与普通标签没有区别。
在generate时，走到genDirective方法的时候，该方法会将除了input 和 select的标签之外的所有标签，都视为component

这是就会在ast中加入一个model属性, 其中callback作为on的事件 val作为props

最后在createComponent（创建component-Vnode）时，会判断data中有没有model属性。由于本身模板时可以配置model的props名和事件名的

``` js
export default {
  props: ['text'],
  model: {
    prop: 'text',
    event: 'change'
  }
}
```

这个代表v-model的prop是text，触发的事件是change
