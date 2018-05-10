import context, { SnapshotContext } from 'snapshot-context' // eslint-disable-line no-unused-vars
import erte from '../../src'
import { resolve } from 'path'

const SNAPSHOT_DIR = resolve(__dirname, '../snapshots')

/** @type {Object.<string, (ctx: SnapshotContext)>} */
const t = {
  context,
  async 'returns a string with extra text highlighted with green'(ctx) {
    ctx.setDir(SNAPSHOT_DIR)
    const s = 'test'
    const t = 'test extra'
    const res = erte(s, t)
    await ctx.test('extra.txt', res)
  },
  async 'returns a string with missing text highlighted with red'(ctx) {
    ctx.setDir(SNAPSHOT_DIR)
    const s = 'test extra'
    const t = 'test'
    const res = erte(s, t)
    await ctx.test('missing.txt', res)
  },
  async 'returns a string in grey without differences'(ctx) {
    ctx.setDir(SNAPSHOT_DIR)
    const s = 'test extra'
    const t = 'test'
    const res = erte(s, t)
    await ctx.test('missing.txt', res)
  },
}

export default t
