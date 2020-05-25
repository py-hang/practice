# DOM和VDOM

dom是标签的元素节点，vdom是相应的虚拟节点的意思，比如：

dom

```html
<ul id=list">
    <li class="item">akongl</11>
    <li class=item>akong2</1i>
</ul>
```

vdom

```js
{
  tag:'ul', 
    args:{
    id:'list'
    },
     children"[
        {
            tag:'li',
            attrs:{className:'item'},
            children:['akong1']
        },
        {
            tag:'li',
            attrs:{className:'item'},
            children:['akong1']
        },
      ]
}
```

###### 注意：使用JS来实现虚拟dom元素原因是js前端领域中，是唯一一门图灵完备的语言；

> ###### 图灵完备语言：就是指可以进行复杂逻辑操作，实现各种逻辑算法语言

######         使用虚拟dom的话，在视图更新上会消耗更小的性能（只更新改变的dom元素，其他的dom元素就地复用），而直接操作dom进行视图更新，则会让整个dom树都更新一遍，而实现虚拟dom树中只更新改变的dom元素，则需要使用diff算法

# Diff算法

##### 参考

> https://juejin.im/post/5c4a76b4e51d4526e57da225