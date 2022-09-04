// const eq = require('./eq')
import eq from './eq.mjs'
// const neq = require('./neq')
import neq from './neq.mjs'
// const gt = require('./gt')
import gt from './gt.mjs'
// const gte = require('./gte')
import gte from './gte.mjs'
// const lt = require('./lt')
import lt from './lt.mjs'
// const lte = require('./lte')
import lte from './lte.mjs'

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a === b

    case '!==':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
// module.exports = cmp
export default cmp
