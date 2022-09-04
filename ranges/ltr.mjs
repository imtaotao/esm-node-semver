// const outside = require('./outside')
import outside from './outside.mjs'
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
// module.exports = ltr
export default ltr
