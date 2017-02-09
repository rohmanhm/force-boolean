module.exports = (value) => {
  switch(typeof value) {
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