# when should we `callNative` ☎ ？

## Intro

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

## How to resolve ?

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

      做法：
