// const Range = require('../classes/range')
import Range from '../classes/range.mjs'
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
// module.exports = validRange
export default validRange
