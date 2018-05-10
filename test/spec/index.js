import { equal, assert } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import erte from '../../src'

const erteTestSuite = {
  context,
  'should be a function'() {
    equal(typeof erte, 'function')
  },
  'should call package without error'() {
    assert.doesNotThrow(() => {
      erte()
    })
  },
  /**
   * @param {Context} api
   */
  async 'calls test context method'(api) {
    await api.example()
  },
}

export default erteTestSuite
