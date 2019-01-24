const { diffChars } = require('diff');

const colors = {
  'black': 30,
  'red': 31,
  'green': 32,
  'yellow': 33,
  'blue': 34,
  'magenta': 35,
  'cyan': 36,
  'white': 37,
  'grey': 90,
}

const backgroundColors = {
  'black': 40,
  'red': 41,
  'green': 42,
  'yellow': 43,
  'blue': 44,
  'magenta': 45,
  'cyan': 46,
  'white': 47,
}

/**
 * Color the foreground.
 * @param {string} string The string to color.
 * @param {Color} color The color to apply.
 */
       function c(string, color) {
  const cc = colors[color]
  if (!cc) return string
  return `\x1b[${cc}m${string}\x1b[0m`
}

/**
 * Color the background.
 * @param {string} string The string to color.
 * @param {Color} color The color to apply.
 */
       function b(string, color) {
  const cc = backgroundColors[color]
  if (!cc) return string
  return `\x1b[${cc}m${string}\x1b[0m`
}

/**
 * Compares two strings and outputs a coloured version where strings don't match.
 * @param {string} source A string to compare.
 * @param {string} target Target string to compare with.
 * @returns {string} A string which uses shell-codes to highligh differences.
 */
               function erte(source, target) {
  const d = diffChars(source, target)
  const m = d.map(({ added, removed, value }) => {
    let p
    const s = value.split(' ')
    if (added) {
      p = s.map(t => c(t, 'green')).join(b(' ', 'green'))
    } else if (removed) {
      p = s.map(t => c(t, 'red')).join(b(' ', 'red'))
    } else {
      p = c(value, 'grey')
    }
    return p
  })
  const s = m.join('')
  return s
}

/* documentary types/index.xml */
/**
 * @typedef {('black'|'red'|'green'|'yellow'|'blue'|'magenta'|'cyan'|'white'|'grey')} Color The color.
 */


module.exports = erte
module.exports.c = c
module.exports.b = b