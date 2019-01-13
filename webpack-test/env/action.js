export const $click = (ref, data = {}) => {
  window.callJS(instanceId, [{
    module: 'dom',
    method: 'fireEvent',
    args: [
      ref,
      'click'
    ],
    data
  }]
  )
}

export const $ev = (type, ref, data = {}) => {
  window.callJS(instanceId, [{
    module: 'dom',
    method: 'fireEvent',
    args: [
      ref,
      type
    ],
    data
  }])
}