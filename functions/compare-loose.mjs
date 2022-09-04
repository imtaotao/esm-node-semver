// const compare = require('./compare')
import compare from './compare.mjs'
const compareLoose = (a, b) => compare(a, b, true)
// module.exports = compareLoose
export default compareLoose
