// const compare = require('./compare')
import compare from './compare.mjs'
const neq = (a, b, loose) => compare(a, b, loose) !== 0
// module.exports = neq
export default neq
