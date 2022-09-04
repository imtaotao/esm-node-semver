// const Range = require('../classes/range')
import Range from '../classes/range.mjs'
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
// module.exports = satisfies
export default satisfies
