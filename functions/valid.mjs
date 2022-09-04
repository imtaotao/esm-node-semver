// const parse = require('./parse')
import parse from './parse.mjs'
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
// module.exports = valid
export default valid