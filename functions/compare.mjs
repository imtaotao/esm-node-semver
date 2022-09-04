// const SemVer = require('../classes/semver')
import SemVer from '../classes/semver.mjs'
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

// module.exports = compare
export default compare