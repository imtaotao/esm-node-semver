// const compare = require('./compare')
import compare from './compare.mjs'
const lte = (a, b, loose) => compare(a, b, loose) <= 0
// module.exports = lte
export default lte
