(async () => {
  const t = require('tap')
  const constants = (await import('../../internal/constants')).default

  t.match(constants, {
    SEMVER_SPEC_VERSION: String,
    MAX_LENGTH: Number,
    MAX_SAFE_INTEGER: Number,
    MAX_SAFE_COMPONENT_LENGTH: Number,
  }, 'got some numbers exported')
})()
