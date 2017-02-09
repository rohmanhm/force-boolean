# Force Boolean
Forced transform your variable into a boolean without worried.

## How to use
```javascript
const ForceBoolean = require('force-boolean')

const YOUR_VAR = 'false'
console.log(ForceBoolean(YOUR_VAR)) // it's return boolean false
```

## Test
- [x] return false if value is number 0
- [x] return false if value is string '0'
- [x] return false if value is string 'false'
- [x] return false if value is boolean false
- [x] return true if value is number 1
- [x] return true if value is string '1'
- [x] return true if value is string 'true'
- [x] return true if value is boolean true