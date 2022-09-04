// const compare = require('./compare')
import compare from './compare.mjs'
const rcompare = (a, b, loose) => compare(b, a, loose)
// module.exports = rcompare
export default rcompare
