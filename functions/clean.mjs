// const parse = require('./parse')
import parse from 'parse.mjs'
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
// module.exports = clean
export default clean
