// const compare = require('./compare')
import compare from './compare.mjs'
const eq = (a, b, loose) => compare(a, b, loose) === 0
// module.exports = eq
export default eq
