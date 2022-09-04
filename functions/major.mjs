// const SemVer = require('../classes/semver')
import SemVer from '../classes/semver.mjs'
const major = (a, loose) => new SemVer(a, loose).major
// module.exports = major
export default major
