// const compare = require('./compare')
import compare from './compare.mjs'
const gte = (a, b, loose) => compare(a, b, loose) >= 0
// module.exports = gte
export default gte
