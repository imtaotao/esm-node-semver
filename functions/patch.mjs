// const SemVer = require('../classes/semver')
import SemVer from '../classes/semver.mjs'
const patch = (a, loose) => new SemVer(a, loose).patch
// module.exports = patch
export default patch
