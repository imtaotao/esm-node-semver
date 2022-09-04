// const parse = require('./parse')
import parse from './parse.mjs'
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
// module.exports = prerelease
export default prerelease
