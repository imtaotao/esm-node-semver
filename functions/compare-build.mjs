// const SemVer = require('../classes/semver')
import SemVer from '../classes/semver.mjs'
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
// module.exports = compareBuild
export default compareBuild
