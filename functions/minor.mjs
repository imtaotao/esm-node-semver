// const SemVer = require('../classes/semver')
import SemVer from '../classes/semver.mjs'
const minor = (a, loose) => new SemVer(a, loose).minor
// module.exports = minor
export default minor
