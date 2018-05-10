/**
 * @typedef {Object} Context
 * @property {function():Promise<string>} example An example method
 */

export default async function context () {
  this.example = async () => {
    return 'OK'
  }
  this._destroy = async () => {
    console.log('destroy context')
  }
}

/**
 * @type {Context}
 */
export const Context = {}
