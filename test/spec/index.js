import SnapshotContext from 'snapshot-context'
import erte from '../../src'

const SNAPSHOT_DIR = 'test/snapshot'

/** @type {Object.<string, (ctx: SnapshotContext)>} */
const T = {
  context: SnapshotContext,
  async 'returns a string with extra text highlighted with green'({ setDir, test }) {
    setDir(SNAPSHOT_DIR)
    const s = 'test'
    const t = 'test extra'
    const res = erte(s, t)
    await test('extra.txt', res)
  },
  async 'returns a string with missing text highlighted with red'({ setDir, test }) {
    setDir(SNAPSHOT_DIR)
    const s = 'test extra'
    const t = 'test'
    const res = erte(s, t)
    await test('missing.txt', res)
  },
  async 'returns a string in grey without differences'({ setDir, test }) {
    setDir(SNAPSHOT_DIR)
    const s = 'test'
    const t = 'test'
    const res = erte(s, t)
    await test('same.txt', res)
  },
  async 'prints new lines'({ setDir, test }) {
    setDir(SNAPSHOT_DIR)
    const s = 'test\n'
    const t = 'test'
    const res = erte(s, t)
    await test('new-lines.txt', res)
  },
}

export default T
