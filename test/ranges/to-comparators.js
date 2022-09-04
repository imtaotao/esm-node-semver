(async () => {
  const { test } = require('tap')
  const toComparators = (await import('../../ranges/to-comparators')).default

  test('comparators test', (t) => {
    // [range, comparators]
    // turn range into a set of individual comparators
    [['1.0.0 - 2.0.0', [['>=1.0.0', '<=2.0.0']]],
      ['1.0.0', [['1.0.0']]],
      ['>=*', [['']]],
      ['', [['']]],
      ['*', [['']]],
      ['*', [['']]],
      ['>=1.0.0', [['>=1.0.0']]],
      ['>=1.0.0', [['>=1.0.0']]],
      ['>=1.0.0', [['>=1.0.0']]],
      ['>1.0.0', [['>1.0.0']]],
      ['>1.0.0', [['>1.0.0']]],
      ['<=2.0.0', [['<=2.0.0']]],
      ['1', [['>=1.0.0', '<2.0.0-0']]],
      ['<=2.0.0', [['<=2.0.0']]],
      ['<=2.0.0', [['<=2.0.0']]],
      ['<2.0.0', [['<2.0.0']]],
      ['<2.0.0', [['<2.0.0']]],
      ['>= 1.0.0', [['>=1.0.0']]],
      ['>=  1.0.0', [['>=1.0.0']]],
      ['>=   1.0.0', [['>=1.0.0']]],
      ['> 1.0.0', [['>1.0.0']]],
      ['>  1.0.0', [['>1.0.0']]],
      ['<=   2.0.0', [['<=2.0.0']]],
      ['<= 2.0.0', [['<=2.0.0']]],
      ['<=  2.0.0', [['<=2.0.0']]],
      ['<    2.0.0', [['<2.0.0']]],
      ['<\t2.0.0', [['<2.0.0']]],
      ['>=0.1.97', [['>=0.1.97']]],
      ['>=0.1.97', [['>=0.1.97']]],
      ['0.1.20 || 1.2.4', [['0.1.20'], ['1.2.4']]],
      ['>=0.2.3 || <0.0.1', [['>=0.2.3'], ['<0.0.1']]],
      ['>=0.2.3 || <0.0.1', [['>=0.2.3'], ['<0.0.1']]],
      ['>=0.2.3 || <0.0.1', [['>=0.2.3'], ['<0.0.1']]],
      ['||', [['']]],
      ['2.x.x', [['>=2.0.0', '<3.0.0-0']]],
      ['1.2.x', [['>=1.2.0', '<1.3.0-0']]],
      ['1.2.x || 2.x', [['>=1.2.0', '<1.3.0-0'], ['>=2.0.0', '<3.0.0-0']]],
      ['1.2.x || 2.x', [['>=1.2.0', '<1.3.0-0'], ['>=2.0.0', '<3.0.0-0']]],
      ['x', [['']]],
      ['2.*.*', [['>=2.0.0', '<3.0.0-0']]],
      ['1.2.*', [['>=1.2.0', '<1.3.0-0']]],
      ['1.2.* || 2.*', [['>=1.2.0', '<1.3.0-0'], ['>=2.0.0', '<3.0.0-0']]],
      ['1.2.* || 2.*', [['>=1.2.0', '<1.3.0-0'], ['>=2.0.0', '<3.0.0-0']]],
      ['*', [['']]],
      ['2', [['>=2.0.0', '<3.0.0-0']]],
      ['2.3', [['>=2.3.0', '<2.4.0-0']]],
      ['~2.4', [['>=2.4.0', '<2.5.0-0']]],
      ['~2.4', [['>=2.4.0', '<2.5.0-0']]],
      ['~>3.2.1', [['>=3.2.1', '<3.3.0-0']]],
      ['~1', [['>=1.0.0', '<2.0.0-0']]],
      ['~>1', [['>=1.0.0', '<2.0.0-0']]],
      ['~> 1', [['>=1.0.0', '<2.0.0-0']]],
      ['~1.0', [['>=1.0.0', '<1.1.0-0']]],
      ['~ 1.0', [['>=1.0.0', '<1.1.0-0']]],
      ['~ 1.0.3', [['>=1.0.3', '<1.1.0-0']]],
      ['~> 1.0.3', [['>=1.0.3', '<1.1.0-0']]],
      ['<1', [['<1.0.0-0']]],
      ['< 1', [['<1.0.0-0']]],
      ['>=1', [['>=1.0.0']]],
      ['>= 1', [['>=1.0.0']]],
      ['<1.2', [['<1.2.0-0']]],
      ['< 1.2', [['<1.2.0-0']]],
      ['1', [['>=1.0.0', '<2.0.0-0']]],
      ['1 2', [['>=1.0.0', '<2.0.0-0', '>=2.0.0', '<3.0.0-0']]],
      ['1.2 - 3.4.5', [['>=1.2.0', '<=3.4.5']]],
      ['1.2.3 - 3.4', [['>=1.2.3', '<3.5.0-0']]],
      ['1.2.3 - 3', [['>=1.2.3', '<4.0.0-0']]],
      ['>*', [['<0.0.0-0']]],
      ['<*', [['<0.0.0-0']]],
      ['>X', [['<0.0.0-0']]],
      ['<X', [['<0.0.0-0']]],
      ['<x <* || >* 2.x', [['<0.0.0-0']]],
      ['>x 2.x || * || <x', [['']]],
    ].forEach(([pre, wanted]) => {
      const found = toComparators(pre)
      const jw = JSON.stringify(wanted)
      t.same(found, wanted, `toComparators(${pre}) === ${jw}`)
    })

    t.end()
  })
})()

