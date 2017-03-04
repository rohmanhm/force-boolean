module.exports = function (value) {
  switch(typeof value) {
    case 'boolean': // (true | false)
      return value
      break
    case 'number': // (0 | 1)
      return (value === 1)
      break
    case 'object': // (null)
      return !(value === null);
      break;
    case 'string': // ('true' | 'false' | '0' | '1')
      return (value === 'true' || value === '1')
      break
    case 'undefined': // (undefined)
      return false
      break
  }
}
