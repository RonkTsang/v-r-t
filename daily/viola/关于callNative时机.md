# when should we `callNative` ☎ ？
<!-- TOC -->

- [when should we `callNative` ☎ ？](#when-should-we-callnative)
  - [问题](#)
  - [解决](#)
    - [**参考 `weex`**](#weex)
    - [**思考的解决思路**](#)

<!-- /TOC -->
## 问题

  `Viola-web` 端通过 `callNative` 方法与 `Viola-Native` 通讯，其中包括有对 virtual dom 的增删改操作

  比如有：

  - 增加元素
  
    ``` javascript
    var div
    document.body.appendChild((div = new Element('div)))
    ```
    其实 `appendChild` 底层将会调用：

    ``` javascript
    Viola.callNative('dom', 'add_element', {
      ref: 'root',
      domObj: div
    })
    ```
  - 更新元素：(同理底层类似)

    ``` javascript
    Viola.callNative('dom', 'update_element', {
      ref: 'root',
      update
    })
    ```
  这是一个容易理解的过程。

  但是想想，有这么一个问题，如果被操作的 node 在 Native 端是不存在的呢 ？

  ``` javascript
    // js 层的虚拟节点，并未存在于 native
    var div = document.createElement('div')

    div.appendChild(new TextNode('oh yep'))
    // or add event
    div.on('click', (e) => console.log(e))

  ```
  那么，还需要去callNative嘛？

  ``` javascript
  Viola.callNative('dom', 'add_event', {
    ref: 'div1',
    type: 'click'
  })
  ```

  显然，这个时候 `callNative` 是没有意义的，因为 native 端根本就不存在这个节点

  另外，接入 `Vue` 后，它的操作过程是这样的：

  ``` javascript
  new Vue({
    render (h) {
      return h('div', {}, [ h('p') ])
    }
  }).$mount('app')
  ```

  这个过程：
  - 先创建一个 `div`
  - 接着创建一个 `p`
  - 将 `p` 放进 `div`，
  - 将 `div` 挂载

  其中就有出现这个问题，把 `p` 放进 `div` 时，`div` 并不存在于 native，此时不应该 `callNative`，而是得等到 `div` 挂载后，将一整颗子树加入。
  
  因此这个东西是不是就会造成一个通讯过多的问题？

## 解决

  ### **参考 `weex`**
  
  看了 `Weex` 中 `Element` 的源码，发现当进行 `appendChild` 操作时，都是直接通知 `native` 端的

  ``` javascript
  const taskCenter = getTaskCenter(this.docId)
  if (taskCenter) {
    return taskCenter.send(
      'dom',
      { action: 'addElement' },
      [this.ref, node.toJSON(), -1]
    )
  }
  ```
  但这样的做法不是就会出现我们上面的问题了吗？ 😵

  但是，在 `setAttr` 等其他操作时，`weex` 又用了了 `slient` 的参数来控制要不要进行通讯。

  ### **思考的解决思路**

  - 何时需要真正用到通讯？

    必要条件：操作元素存在于 native

  - 如何判断是否存在于 native

    给 Element 新增一个属性 `isNatived`, 当存在于 native 时，该属性为 `true`， 初始为 `false`

    那么，只要知道这个值为 `false` , 就不必进行通讯，由 js 层进行保管

  - 如何更新 `isNatived` 的值？

    可以想到的方法：

    - 在 `createBody` 时，将一整棵树进行遍历，`isNatived = true`
      - 优点：方便
      - 缺点: 多了一个遍历操作，性能影响
    - 使用 `created` 回调钩子
      - 优点：绝对准确，方便
      - 缺点：每个都需要 `created` 钩子，那不也是频繁通讯了吗？
    - 动态判断

      先将 `document` 的状态初始值为 `isNatived = true`

      如果 `node.appendChild(child)` 中 `node` 存在于 native 中，那么加入的 `child` 一整课子树应该更新为 `isNatived = true`

      这个更新过程中，如果碰到 其中一个 child 的 `isNatived` 为 `true`，则不必遍历该子树，因为它的子节点的状态已经是被更新过的了

      此外，在 Vue 的 `node-ops` 中的 `appendChild` 函数中，当 `node.appendChild(child)` 时，就算 `node` 不在 native 中，我们也可以直接将 `child` 更新 `isNatived = true`，因为既然走到这一步了，就意味着这个节点是要被加入 native 中的。

      当 new Vue 的 `appendChild` 走到 `document` 时，因为 `document` 的状态初始值为 `isNatived = true`，此时则将一整 dom tree 进行 `callNative` 操作

  当前采用的方案是 **动态判断**

  保底方案：`weex` 的做法