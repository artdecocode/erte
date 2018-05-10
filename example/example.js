import erte from '..'

const s = 'test this string'
const e = 'test this string with extra data'
const m = 'test this'

const green = erte(s, e)
console.log(green)

const red = erte(s, m)
console.log(red)

const grey = erte(s, s)
console.log(grey)
