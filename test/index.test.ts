import ForceBoolean from "../dist";

describe("force-boolean", () => {
  describe("return false", () => {
    it("return false if value is number 0", () => {
      expect(ForceBoolean(0)).toBe(false);
    });
    it("return false if value is string '0'", () => {
      expect(ForceBoolean("0")).toBe(false);
    });
    it("return false if value is string 'false'", () => {
      expect(ForceBoolean("false")).toBe(false);
    });
    it("return false if value is plain string 'foobar'", () => {
      expect(ForceBoolean("foobar")).toBe(false);
    });
    it("return false if value is boolean false", () => {
      expect(ForceBoolean(false)).toBe(false);
    });
    it("return false if value is null", () => {
      expect(ForceBoolean(null)).toBe(false);
    });
    it("return false if value is undefined", () => {
      expect(ForceBoolean(undefined)).toBe(false);
    });
  });

  describe("return true", () => {
    it("return true if value is number 1", () => {
      expect(ForceBoolean(1)).toBe(true);
    });
    it("return true if value is string '1'", () => {
      expect(ForceBoolean("1")).toBe(true);
    });
    it("return true if value is string 'true'", () => {
      expect(ForceBoolean("true")).toBe(true);
    });
    it("return true if value is boolean true", () => {
      expect(ForceBoolean(true)).toBe(true);
    });
    it("return true if value is array object", () => {
      expect(ForceBoolean([3, 4, null])).toBe(true);
    });
    it("return true if value is object", () => {
      expect(ForceBoolean({ a: 1, b: 3 })).toBe(true);
    });
  });

  describe("strict mode is off", () => {
    it('return true if value is plain string "foobar"', () => {
      expect(ForceBoolean("foobar", false)).toBe(true);
    });

    it("return false if value is false or 0", () => {
      expect(ForceBoolean("false", false)).toBe(false);
      expect(ForceBoolean("0", false)).toBe(false);
    });
  });
});
