(async () => {
  const { test } = require('tap')
  const intersects = (await import('../../ranges/intersects')).default
  const Range = (await import('../../classes/range')).default
  const Comparator = (await import('../../classes/comparator')).default
  const comparatorIntersection = require('../fixtures/comparator-intersection.js')
  const rangeIntersection = require('../fixtures/range-intersection.js')

  test('intersect comparators', t => {
    t.plan(comparatorIntersection.length)
    comparatorIntersection.forEach(([c0, c1, expect]) => t.test(`${c0} ${c1} ${expect}`, t => {
      const comp0 = new Comparator(c0)
      const comp1 = new Comparator(c1)

      t.equal(intersects(comp0, comp1), expect, `${c0} intersects ${c1} objects`)
      t.equal(intersects(comp1, comp0), expect, `${c1} intersects ${c0} objects`)
      t.equal(intersects(comp0, comp1, true), expect,
        `${c0} intersects ${c1} loose, objects`)
      t.equal(intersects(comp1, comp0, true), expect,
        `${c1} intersects ${c0} loose, objects`)
      t.equal(intersects(c0, c1), expect, `${c0} intersects ${c1}`)
      t.equal(intersects(c1, c0), expect, `${c1} intersects ${c0}`)
      t.equal(intersects(c0, c1, true), expect,
        `${c0} intersects ${c1} loose`)
      t.equal(intersects(c1, c0, true), expect,
        `${c1} intersects ${c0} loose`)
      t.end()
    }))
  })

  test('ranges intersect', (t) => {
    rangeIntersection.forEach(([r0, r1, expect]) => {
      t.test(`${r0} <~> ${r1}`, t => {
        const range0 = new Range(r0)
        const range1 = new Range(r1)

        t.equal(intersects(r1, r0), expect, `${r0} <~> ${r1}`)
        t.equal(intersects(r0, r1), expect, `${r1} <~> ${r0}`)
        t.equal(intersects(r1, r0, true), expect, `${r0} <~> ${r1} loose`)
        t.equal(intersects(r0, r1, true), expect, `${r1} <~> ${r0} loose`)
        t.equal(intersects(range0, range1), expect, `${r0} <~> ${r1} objects`)
        t.equal(intersects(range1, range0), expect, `${r1} <~> ${r0} objects`)
        t.equal(intersects(range0, range1, true), expect,
          `${r0} <~> ${r1} objects loose`)
        t.equal(intersects(range1, range0, true), expect,
          `${r1} <~> ${r0} objects loose`)
        t.end()
      })
    })
    t.end()
  })

  test('missing comparator parameter in intersect comparators', (t) => {
    t.throws(() => {
      new Comparator('>1.0.0').intersects()
    }, new TypeError('a Comparator is required'),
    'throws type error')
    t.end()
  })
})()
