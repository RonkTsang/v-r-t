window.$update = {
  appear() {
    window.updateInstance(window.instanceId, {
      viewDidAppear: 1
    })
  },
  disappear() {
    window.updateInstance(window.instanceId, {
      viewDidDisappear: 1
    })
  },
  pass(p) {
    window.updateInstance(window.instanceId, p)
  }
}

window.$destroy = (id) => {
  window.destroyInstance(id || window.instanceId)
}