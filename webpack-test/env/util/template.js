const insertReg = /<%(.+?)%>/ig

// genarage code as a entry file
export default function genCode(template, value) {
  return template.replace(insertReg, (match, key) => {
    if (key && (key = key.trim()) && value[key]) {
      return value[key]
    } else {
      return match
    }
  })
}