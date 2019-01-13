import {
  isUndef
} from './check'

export function diffObject(
  oldObj,
  obj,
  {
    rm,
    add,
    update
  }
) {
  let mutations = {}
  let copyOld = Object.assign({}, oldObj)
  // get attr add/modify mutation
  for (const key in obj) {
    let value = obj[key], oldValue
    let isAdd = isUndef(oldValue = copyOld[key])
    // set mutaition
    if (value !== oldValue) {
      if (isAdd) {
        mutations[key] = add ? add(key, value, oldValue) : value
      } else {
        mutations[key] = update ? update(key, value, oldValue) : value
      }
    }
    !isAdd && (delete copyOld[key])
  }
  // get delete value mutations
  for (const key in copyOld) {
    mutations[key] = rm ? rm(key, '', copyOld[key]) : ''
  }

  return mutations
}