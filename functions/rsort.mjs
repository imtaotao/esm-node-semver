// const compareBuild = require('./compare-build')
import compareBuild from './compare-build.mjs'
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
// module.exports = rsort
export default rsort
