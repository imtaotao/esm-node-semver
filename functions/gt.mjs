// const compare = require('./compare')
import compare from './compare.mjs'
const gt = (a, b, loose) => compare(a, b, loose) > 0
// module.exports = gt
export default gt
