(async () => {
  const t = require('tap')
  t.same(await import('../../classes/index.mjs'), {
    SemVer: (await import('../../classes/semver.mjs')).default,
    Range: (await import('../../classes/range.mjs')).default,
    Comparator: (await import('../../classes/comparator.mjs')).default,
  }, 'export all classes at semver/classes')
})()

