const expect = require('expect')
const ForceBoolean = require('../src')

describe('force-boolean', () => {
  describe('return false', () => {
    it('return false if value is number 0', () => {
      expect(ForceBoolean(0)).toBeA('boolean').toBe(false)
    })
    it('return false if value is string \'0\'', () => {
      expect(ForceBoolean('0')).toBeA('boolean').toBe(false)
    })
    it('return false if value is string \'false\'', () => {
      expect(ForceBoolean('false')).toBeA('boolean').toBe(false)
    })
    it('return false if value is boolean false', () => {
      expect(ForceBoolean(false)).toBeA('boolean').toBe(false)
    })
    it('return false if value is null', () => {
      expect(ForceBoolean(null)).toBeA('boolean').toBe(false)
    })
    it('return false if value is undefined', () => {
      expect(ForceBoolean(undefined)).toBeA('boolean').toBe(false)
    })
  })
  describe('return true', () => {
    it('return true if value is number 1', () => {
      expect(ForceBoolean(1)).toBeA('boolean').toBe(true)
    })
    it('return true if value is string \'1\'', () => {
      expect(ForceBoolean('1')).toBeA('boolean').toBe(true)
    })
    it('return true if value is string \'true\'', () => {
      expect(ForceBoolean('true')).toBeA('boolean').toBe(true)
    })
    it('return true if value is boolean true', () => {
      expect(ForceBoolean(true)).toBeA('boolean').toBe(true)
    })
  })
})
