module.exports = (value) => {
  switch(typeof value) {
    case 'object':
      // handle null value
      return !(value === null);
      break;
    case 'undefined':
      return false;
      break;

    case 'boolean':
      return value
      break
    case 'number': // (0 | 1)
      return ( value === 1 )
      break
    case 'string': // ('true' | 'false' | '0' | '1')
      return ( value === 'true' || value === '1' )
      break
  }
}
