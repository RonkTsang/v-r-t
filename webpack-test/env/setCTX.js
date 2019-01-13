window.instanceId = parseInt(Math.random() * 100)

if (window.createInstanceCtx) {
  const CTX = window.createInstanceCtx(instanceId, {
    url: 'url',
    param: {
      test: 1
    }
  })
  
  window.viola = CTX.viola
  window.Vue = CTX.Vue
} else {
  throw new Error('No createInstanceCtx for Viola.js Debugger, please update viola.js')
}