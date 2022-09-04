// const t = require('tap')
// const preload = require('../preload.js')
// const index = require('../index.js')
// t.equal(preload, index, 'preload and index match')

;(async () => {
  const t = require('tap')
  const preload = await import('../preload.mjs')
  const index = await import('../index.mjs')
  t.equal(preload, index, 'preload and index match')
})()
