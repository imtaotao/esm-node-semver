module.exports = testFile => {
  console.log(testFile, testFile.replace(/test\//, '').replace('.js', '.mjs'));
  return testFile.replace(/test\//, '').replace('.js', '.mjs')
}
