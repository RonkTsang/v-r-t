import {
  ROOT_ID,
  ACTION
} from '../constant'

import './style.css'

import { getConfig } from './chart_config'

// const echarts = require('echarts');
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/tree');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export const domTree = (() => {
  var store = {
    treeChart: null,
    domMap: {},
    domObj: null,
    treeData: null,
    events: {},
    option: {},
    rootDom: null
  }

  return {

    get(type) {
      return store[type] || store
    },

    set(type, value) {
      store[type] = value
      return this
    },

    setOption (opt) {
      var {
        el = ROOT_ID,
        on = []
      } = opt

      this
        .set('rootDom', document.getElementById(el))
        .set('events', on)
        .set('option', opt)
    },

    init (domObj = {}) {
      this
        ._initTreeData(domObj)
        ._initDom()
        ._initChart()
        ._initListener()
    },

    _initDom(rootName) {
      var rootDom = this.get('rootDom')
      rootDom.style = `height: ${window.innerHeight}px;`

      return this.set('treeChart', echarts.init(rootDom))
    },

    _initTreeData(domObj) {
      return this.set('domObj', domObj).set('treeData', this.genTree(domObj))
    },

    _initChart () {
      this.get('treeChart').setOption(getConfig(this.get('treeData')));
      return this
    },

    _initListener() {
      let events = this.get('events')
      Object.keys(events).forEach(name => {
        this.get('treeChart').on(name, ((name) => (params) => {
          this.get('events')[name](params.data._domObj, params)
        })(name))
      })
    },

    transformToTree(domObj, cb, parentNode = null) {
      var label = `${domObj.ref} ${domObj.type}`

      var nodeData = {
        isTree: true,
        parentRef: (parentNode && parentNode.ref) || null,
        ref: domObj.ref,
        name: label,
        value: label,
        _domObj: domObj
      }

      if (!domObj.children) {
        domObj.children = []
      }

      nodeData.children = domObj.children.length
        ? domObj.children.map(c => this.transformToTree(c, cb, nodeData))
        : []

      cb && cb(nodeData)
      return nodeData
    },

    genTree(domObj, parentNode = null) {
      var domMap = this.get('domMap')
      return this.transformToTree.call(this, domObj, (nodeData) => {
        domMap[nodeData.ref] = nodeData
      }, parentNode)
    },

    refreshTree(treeData) {
      var _data = treeData || this.get('treeData')
      this.get('treeChart').setOption({
        series: [{ data: [_data] }]
      })
    },

    update(ref, updateMutation) {
      var domMap = this.get('domMap')

      if (domMap[ref]) {
        let domObj = domMap[ref]._domObj
        for (const k in updateMutation) {
          domObj[k] = Object.assign(domObj[k] || {}, updateMutation[k])
        }
      }
    },

    add (ref, domObj, index) {
      var domMap = this.get('domMap')
      var parentNode = domMap[ref]

      if (!parentNode) {
        return
      }

      var subTree = domObj.isTree ? domObj : this.genTree(domObj, parentNode)
      index = index === -1 ? Infinity : index
      parentNode.children.splice(index, 0, subTree)
      parentNode._domObj.children.splice(index, 0, subTree._domObj)

    },

    move (parentRef, subRef, index) {
      var domMap = this.get('domMap')
      var subNode = domMap[subRef]
      if (!subNode) {
        return
      }
      // remove
      this.remove(subRef)
      this.add(parentRef, subNode, index)

      // update parentRef
      subNode.parentRef = parentRef
    },

    remove (ref) {
      var domMap = this.get('domMap')
      var node = domMap[ref]

      if (!node) {
        return
      }

      var parentNode = domMap[node.parentRef],
        index = parentNode.children.indexOf(node)

      parentNode.children.splice(index, 1)
      parentNode._domObj.children.splice(index, 1)

    },

    act (type, args) {
      this[type] && this[type].apply(this, args)
      this.refreshTree()
    }
  }
})()


const domModule = {
  setOption (opts) {
    domTree.setOption(opts)
  },
  [ACTION.CREATE_BODY] (domObj) {
    domTree.init(domObj)
  },
  [ACTION.UPDATE_ELEMENT] (args) {
    domTree.act('update', args)
  },
  [ACTION.ADD_ELEMENT] (args) {
    domTree.act('add', args)
  },
  [ACTION.MOVE_ELEMENT] (args) {
    domTree.act('move', args)
  },
  [ACTION.REMOVE_ELEMENT] (args) {
    domTree.act('remove', args)
  }
}

export default domModule