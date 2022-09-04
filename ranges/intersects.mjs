// const Range = require('../classes/range')
import Range from '../classes/range.mjs'
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
// module.exports = intersects
export default intersects
