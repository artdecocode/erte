"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = erte;

var _diff = require("diff");

function c(t, color) {
  switch (color) {
    case 'red':
      return `\x1b[31m${t}\x1b[0m`;

    case 'green':
      return `\x1b[32m${t}\x1b[0m`;

    case 'grey':
      return `\x1b[90m${t}\x1b[0m`;

    default:
      return t;
  }
}

function b(t, color) {
  switch (color) {
    case 'red':
      return `\x1b[41m${t}\x1b[0m`;

    case 'green':
      return `\x1b[42m${t}\x1b[0m`;

    default:
      return t;
  }
}
/**
 * Compares two strings and outputs a coloured version where strings don't match.
 * @param {string} source A string to compare.
 * @param {string} target Target string to compare with.
 * @returns {string} A string which uses shell-codes to highligh differences.
 */


function erte(source, target) {
  const d = (0, _diff.diffChars)(source, target);
  const m = d.map(({
    added,
    removed,
    value
  }) => {
    let p;
    const s = value.split(' ');

    if (added) {
      p = s.map(t => c(t, 'green')).join(b(' ', 'green'));
    } else if (removed) {
      p = s.map(t => c(t, 'red')).join(b(' ', 'red'));
    } else {
      p = c(value, 'grey');
    }

    return p;
  });
  const s = m.join('');
  return s;
}