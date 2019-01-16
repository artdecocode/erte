import { equal } from 'zoroaster/assert'
import api, { c, b } from '../../src'

const T = {
  'runs the exported api'() {
    const res = api('test', ' test2')
    equal(res, '\u001b[32m\u001b[0m\u001b[42m \u001b[0m\u001b[32m\u001b[0m\u001b[90mtest\u001b[0m\u001b[32m2\u001b[0m')
  },
  'runs the c function'() {
    const red = c('string', 'red')
    const green = c('string', 'green')
    const grey = c('string', 'grey')
    const random = c('string', 'random')
    equal(red, '\u001b[31mstring\u001b[0m')
    equal(green, '\u001b[32mstring\u001b[0m')
    equal(grey, '\u001b[90mstring\u001b[0m')
    equal(random, 'string')
  },
  'runs the b function'() {
    const red = b('string', 'red')
    const green = b('string', 'green')
    const random = b('string', 'random')
    equal(red, '\u001b[41mstring\u001b[0m')
    equal(green, '\u001b[42mstring\u001b[0m')
    equal(random, 'string')
  },
}

export default T