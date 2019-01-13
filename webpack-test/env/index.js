import './globalVar'
import './lifecycle'
import domModule, { domTree } from './dom/domModule'

import { MODULE } from './constant'

import CtrlBar from './ctrlBar/index'

import CmdList from './cmd/index'

const ctrlBar = new CtrlBar({
  el: 'app',
  on: {
    open () {
      domTree.get('rootDom').classList.add('left')
    },
    close () {
      domTree.get('rootDom').classList.remove('left')
    }
  }
})

const cmdList = new CmdList({
  el: 'app'
})

domModule.setOption({
  on: {
    click (data) {
      console.log(data)
      ctrlBar.open(data)
    }
  }
})



window.callNative = function (id, tasks) {
  console.log('i got it')
  console.log('id: ' + id)
  console.log('task', tasks)
  var currentTask = tasks[0]
  var { module, args, method, component } = currentTask
  cmdList.append(currentTask)
  switch (module) {
    case MODULE.DOM:
      domModule[method](args)
      break;
    default:
      console.info('not support now')
  }
};