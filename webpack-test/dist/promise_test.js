function sleep( time ) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

sleep(2000).then(_ => {
  console.log('wake up !!')
})