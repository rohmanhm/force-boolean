# Force Boolean

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/force-boolean.svg)](https://greenkeeper.io/)
Forced transform your variable into a boolean without worried.

## How to install

  * via **npm**: `npm install --save force-boolean`
  * via **yarn**: `yarn add force-boolean`

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
- [x] return false if value is undefined
- [x] return false if value is null
- [x] return true if value is number 1
- [x] return true if value is string '1'
- [x] return true if value is string 'true'
- [x] return true if value is boolean true
