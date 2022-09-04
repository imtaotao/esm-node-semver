(async () => {
  const { test } = require('tap')
  const { src, re } = await import('../../internal/re')
  const semver = (await import('../../')).default

  test('has a list of src, re, and tokens', (t) => {
    t.match(Object.assign({}, semver), {
      src: Array,
      re: Array,
      tokens: Object,
    })
    re.forEach(r => t.match(r, RegExp, 'regexps are regexps'))
    src.forEach(s => t.match(s, String, 'src is strings'))
    for (const i in semver.tokens) {
      t.match(semver.tokens[i], Number, 'tokens are numbers')
    }
    t.end()
  })
})()
