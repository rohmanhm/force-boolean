const ForceBoolean = (value: any): boolean => {
  switch (typeof value) {
    // Example: true and false
    case 'boolean':
      if (value) return true
    // Example: 0 and 1
    case 'number':
      return value > 0
    // Example: any object except null will return true
    case 'object':
      return !(value === null)
    // Example: 'true' or 'false' or '0' or '1'
    case 'string':
      return value === 'true' || value === '1'
    // Example: undefined
    case 'undefined':
    default:
      return false
  }
}

export default ForceBoolean
