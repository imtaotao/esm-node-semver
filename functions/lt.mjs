// const compare = require('./compare')
import compare from './compare.mjs'
const lt = (a, b, loose) => compare(a, b, loose) < 0
// module.exports = lt
export default lt