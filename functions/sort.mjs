// const compareBuild = require('./compare-build')
import compareBuild from './compare-build.mjs'
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
// module.exports = sort
export default sort;
