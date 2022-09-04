// just pre-load all the stuff that index.js lazily exports
// const internalRe = require('./internal/re')
import internalRe from './internal/re.mjs'

import { SEMVER_SPEC_VERSION } from './internal/constants.mjs'
import SemVer from './classes/semver.mjs'
import { compareIdentifiers, rcompareIdentifiers } from './internal/identifiers.mjs'
import parse from './functions/parse.mjs'
import valid from './functions/valid.mjs'
import clean from './functions/clean.mjs'
import inc from './functions/inc.mjs'
import diff from './functions/diff.mjs'
import major from './functions/major.mjs'
import minor from './functions/minor.mjs'
import patch from './functions/patch.mjs'
import prerelease from './functions/prerelease.mjs'
import compare from './functions/compare.mjs'
import rcompare from './functions/rcompare.mjs'
import compareLoose from './functions/compare-loose.mjs'
import compareBuild from './functions/compare-build.mjs'
import sort from './functions/sort.mjs'
import rsort from './functions/rsort.mjs'
import gt from './functions/gt.mjs'
import lt from './functions/lt.mjs'
import eq from './functions/eq.mjs'
import neq from './functions/neq.mjs'
import gte from './functions/gte.mjs'
import lte from './functions/lte.mjs'
import cmp from './functions/cmp.mjs'
import coerce from './functions/coerce.mjs'
import Comparator from './classes/comparator.mjs'
import Range from './classes/range.mjs'
import satisfies from './functions/satisfies.mjs'
import toComparators from './ranges/to-comparators.mjs'
import maxSatisfying from './ranges/max-satisfying.mjs'
import minSatisfying from './ranges/min-satisfying.mjs'
import minVersion from './ranges/min-version.mjs'
import validRange from './ranges/valid.mjs'
import outside from './ranges/outside.mjs'
import gtr from './ranges/gtr.mjs'
import ltr from './ranges/ltr.mjs'
import intersects from './ranges/intersects.mjs'
import simplifyRange from './ranges/simplify.mjs'
import subset from './ranges/subset.mjs'

export const re = internalRe.re
export const src = internalRe.src
export const tokens = internalRe.t
export { SEMVER_SPEC_VERSION } from './internal/constants.mjs'
export { default as SemVer } from './classes/semver.mjs';
export { compareIdentifiers, rcompareIdentifiers } from './internal/identifiers.mjs'
export { default as parse } from './functions/parse.mjs'
export { default as valid } from './functions/valid.mjs'
export { default as clean } from './functions/clean.mjs'
export { default as inc } from './functions/inc.mjs'
export { default as diff } from './functions/diff.mjs'
export { default as major } from './functions/major.mjs'
export { default as minor } from './functions/minor.mjs'
export { default as patch } from './functions/patch.mjs'
export { default as prerelease } from './functions/prerelease.mjs'
export { default as compare } from './functions/compare.mjs'
export { default as rcompare } from './functions/rcompare.mjs'
export { default as compareLoose } from './functions/compare-loose.mjs'
export { default as compareBuild } from './functions/compare-build.mjs'
export { default as sort } from './functions/sort.mjs'
export { default as rsort } from './functions/rsort.mjs'
export { default as gt } from './functions/gt.mjs'
export { default as lt } from './functions/lt.mjs'
export { default as eq } from './functions/eq.mjs'
export { default as neq } from './functions/neq.mjs'
export { default as gte } from './functions/gte.mjs'
export { default as lte } from './functions/lte.mjs'
export { default as cmp } from './functions/cmp.mjs'
export { default as coerce } from './functions/coerce.mjs'
export { default as Comparator } from './classes/comparator.mjs'
export { default as Range } from './classes/range.mjs'
export { default as satisfies } from './functions/satisfies.mjs'
export { default as toComparators } from './ranges/to-comparators.mjs'
export { default as maxSatisfying } from './ranges/max-satisfying.mjs'
export { default as minSatisfying } from './ranges/min-satisfying.mjs'
export { default as minVersion } from './ranges/min-version.mjs'
export { default as validRange } from './ranges/valid.mjs'
export { default as outside } from './ranges/outside.mjs'
export { default as gtr } from './ranges/gtr.mjs'
export { default as ltr } from './ranges/ltr.mjs'
export { default as intersects } from './ranges/intersects.mjs'
export { default as simplifyRange } from './ranges/simplify.mjs'
export { default as subset } from './ranges/subset.mjs'

// module.exports = {
//   re: internalRe.re,
//   src: internalRe.src,
//   tokens: internalRe.t,
//   SEMVER_SPEC_VERSION,
//   SemVer,
//   compareIdentifiers,
//   rcompareIdentifiers,
//   parse,
//   valid,
//   clean,
//   inc,
//   diff,
//   major,
//   minor,
//   patch,
//   prerelease,
//   compare,
//   rcompare,
//   compareLoose,
//   compareBuild,
//   sort,
//   rsort,
//   gt,
//   lt,
//   eq,
//   neq,
//   gte,
//   lte,
//   cmp,
//   coerce,
//   Comparator,
//   Range,
//   satisfies,
//   toComparators,
//   maxSatisfying,
//   minSatisfying,
//   minVersion,
//   validRange,
//   outside,
//   gtr,
//   ltr,
//   intersects,
//   simplifyRange,
//   subset,
// }

export default {
  re,
  src,
  tokens,
  SEMVER_SPEC_VERSION,
  SemVer,
  compareIdentifiers,
  rcompareIdentifiers,
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
}
