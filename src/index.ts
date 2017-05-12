type ForceBoolean$Value = Boolean | String | Number | Object | void
interface Window { ForceBoolean: any }
declare const global: Window

const ForceBoolean = (value: ForceBoolean$Value): Boolean => {
  switch(typeof value) {
    // Example: true and false
    case 'boolean':
      if (value) return true
    // Example: 0 and 1
    case 'number':
      return (value === 1)
    // Example: any object except null will return true
    case 'object':
      return !(value === null)
    // Example: 'true' or 'false' or '0' or '1'
    case 'string':
      return (value === 'true' || value === '1')
    // Example: undefined
    case 'undefined':
    default:
      return false
  }
}

// Support for object window
if (!global.ForceBoolean) {
  global.ForceBoolean = ForceBoolean
}

export = ForceBoolean