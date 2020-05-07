module.exports = function fromEntries (iterable) {
  return [...iterable].reduce((object, [key, value]) => {
    object[key] = value
    return object
  }, {})
}
