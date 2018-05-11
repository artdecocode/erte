import context, { SnapshotContext } from 'snapshot-context' // eslint-disable-line no-unused-vars
import { resolve } from 'path'
import erte from '../../src'

const SNAPSHOT_DIR = resolve(__dirname, '../snapshots')

/** @type {Object.<string, (ctx: SnapshotContext)>} */
const T = {
  context,
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
}

export default T
