(async () => {
  const t = require('tap')
  const semver = await import('../index.mjs')
  const { SEMVER_SPEC_VERSION } = await import('../internal/constants.mjs')

  t.match(Object.getOwnPropertyDescriptor(semver, 'SEMVER_SPEC_VERSION'), {
    get: undefined,
    set: undefined,
    value: SEMVER_SPEC_VERSION,
    configurable: false, // origin is true
    enumerable: true,
  }, 'just a normal value property')
})()
