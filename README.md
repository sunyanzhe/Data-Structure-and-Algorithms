# 复习资料

**一篇文章有的段落没看懂没关系，记下来继续往下看，从其他文章中找答案。文章都是人写的、没经过校对，出现不理解的段落很正常。多读多搜索其他的文章，从其他文章中找问题的解释。**

## 网络基础

1. TCP/IP协议

    * TCP/IP那些事（上）：https://coolshell.cn/articles/11564.html

    * TCP/IP那些事（下）：https://coolshell.cn/articles/11609.html

    * TCP协议详解：https://blog.csdn.net/qq_38410730/article/details/81707212

2. HTTP 

    * HTTP灵魂之问（看到第12标题即可）：https://juejin.cn/post/6844904100035821575

3. HTTPS SSL/TLS
  
    * 对称加密与非对称加密：http://47.98.159.95/my_blog/blogs/browser/browser-security/003.html#%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E5%92%8C%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86

    * 阮一峰——图解SSL/TLS协议：http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html

    * 深入理解HTTPS原理、过程与实践：https://zhuanlan.zhihu.com/p/26682342

4. HTTP/2

    * 研发者社区http2.0解释：https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn

    * 理解http2.0（掘金）：https://juejin.cn/post/6844903984524705800

5. UDP协议（简单理解即可，与TCP区别，有哪方面优势）
  
    * UDP详解：https://zhuanlan.zhihu.com/p/337678680

6. HTTP/3 （简单了解即可，基于何种协议，为了解决什么问题）
    * HTTP3.0：https://blog.csdn.net/wolfGuiDao/article/details/108729560

7. 跨域    
    * JSONP：https://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html
    
    * CORS：http://www.ruanyifeng.com/blog/2016/04/cors.html

    * 反向代理原理（了解是什么怎么用即可）：https://www.huaweicloud.com/articles/6b5806d347c88f501f940d45f553e03f.html

    * Nigix反向代理（精力允许可以更进一步）：https://juejin.cn/post/6844903619465068551

## 浏览器基础

1. 浏览器缓存

    * 浏览器灵魂之问：https://juejin.cn/post/6844904021308735502

2. 浏览器渲染原理

    * 现代浏览器是如何工作的（P1）：https://zhuanlan.zhihu.com/p/267488164

    * 现代浏览器是如何工作的（P2）：https://zhuanlan.zhihu.com/p/267730159

    * 现代浏览器是如何工作的（P3）：https://zhuanlan.zhihu.com/p/267763621

    * 现代浏览器是如何工作的（P4）：https://zhuanlan.zhihu.com/p/267819104

    * 无线性能优化：Compositie：https://developer.aliyun.com/article/40799
    
    * 像素的一生： https://juejin.cn/post/7050371465375383589

    * 层叠上下文：https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/

3. 浏览器垃圾回收机制

    * V8 引擎垃圾内存回收原理解析：https://juejin.cn/post/6844903993420840967

4. 浏览器安全

    * XSS：https://tech.meituan.com/2018/09/27/fe-security.html

    * CSRF：https://tech.meituan.com/2018/10/11/fe-security-csrf.html

5. 浏览器性能指标

    * 老指标：https://juejin.cn/post/6844904153869713416#heading-5

    * 为什么出现了新指标：https://mp.weixin.qq.com/s/NYqdeQm5tnQZ1NrgL9vsJQ

    * 2020新指标：https://juejin.cn/post/6844904168591736846

6. 性能优化

    * 性能优化清单：http://lab.johnsenzhou.com/Front-End-Performance-Checklist/
    
7. 事件循环

    * Task、mircoTask、queues and schdules（英文）：https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

    * 深入理解：https://juejin.cn/post/6844904165462769678

## Javascript基础

**刷题网站：https://bigfrontend.dev/**

1. 基础
    * 冴羽Blog：https://github.com/mqyqingfeng/Blog

2. 手写Promise
    
    * Promise/A+规范（英文）：https://promisesaplus.com/

    * 神三元：https://juejin.cn/post/6844903872842956814
    
    * 其他版本： https://github.com/xieranmaya/blog/issues/3

## TypeScript
学废TypeScript： https://zhuanlan.zhihu.com/p/456180727


## 算法

**先看小册，把小册的题都看明白。然后去leetcode刷题，按类型刷题，类型的顺序可以是小册的学习顺序，面试题一般都是简单中等难度**

1. 小册：https://juejin.cn/book/6844733800300150797

2. 力扣：https://leetcode-cn.com

## 设计模式

1. 小册：https://juejin.cn/book/6844733790204461070
## React

1. Fiber

    * 最通俗易懂的时间分片：https://juejin.cn/post/6844903975112671239

2. React的Diff（可以在最后一章对比）

## Vue

**很详细的2.X的详解，代码有点老，思路没有变化：https://github.com/HcySunYang/vue-design/tree/elegant**

**有一本小册也写的很不错 https://juejin.cn/book/6844733705089449991**

1. 响应式

  * 最精简的响应式系统： https://juejin.cn/post/6844903981957791757

2. nextTick的实现

    * 源码：https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js

    * 源码讲解：https://segmentfault.com/a/1190000008589736

3. 双端Diff算法（这里可以直接看VDOM重的双端比较）

4. vdom也可以看下一章

## VDOM 与Diff

1. 文档：http://hcysun.me/vue-design/zh/essence-of-comp.html

2. 项目：https://github.com/sunyanzhe/virtual-dom

## 工程化

### EsLint 
1. 一文读懂Eslint：https://xieyufei.com/2021/04/25/Front-Eslint.html
2. Eslint——extend和plugin：https://blog.csdn.net/letterTiger/article/details/113748741
3. 自定义Eslint：https://developer.aliyun.com/article/824999

### jamstack
1. web建站技术栈：https://zhuanlan.zhihu.com/p/281085404
## 其他资料

### monorepo
1. 基于lerna和yarn workspace的monorepo工作流： https://zhuanlan.zhihu.com/p/71385053
2. 精读monorepo优势：https://zhuanlan.zhihu.com/p/65533186

1. ssh大佬总结的进阶文章：https://github.com/sl1673495/frontend-roadmap
2. 神三元的各种灵魂拷问：https://juejin.cn/user/430664257382462/posts

## 博客
TS：https://mariusschulz.com/
Dan Abramov：https://overreacted.io/
