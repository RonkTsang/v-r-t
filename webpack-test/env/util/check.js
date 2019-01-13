export let isUndef = (value) => {
  return value === undefined || value === null
}

export let isDef = (value) => {
  return value !== undefined && value !== null
}

export let isObject = (value) => {
  return Object.prototype.toString.call(vaule) === '[object Object]'
}

export function isEmptyArr(arr) {
  return arr.length === 0
}

export function isEmptyObj(obj) {
  for (const key in obj) {
    return false
  }
  return true
}