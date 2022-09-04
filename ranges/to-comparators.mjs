// const Range = require('../classes/range')
import Range from '../classes/range.mjs'

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

// module.exports = toComparators
export default toComparators
