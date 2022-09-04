(async () => {
  const { test } = require('tap')
  const rsort = (await import('../../functions/rsort')).default

  test('sorting', (t) => {
    const list = [
      '1.2.3+1',
      '1.2.3+0',
      '1.2.3',
      '5.9.6',
      '0.1.2',
    ]
    const rsorted = [
      '5.9.6',
      '1.2.3+1',
      '1.2.3+0',
      '1.2.3',
      '0.1.2',
    ]
    t.same(rsort(list), rsorted)
    t.end()
  })
})()
