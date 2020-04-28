describe("fizzbuzz", function () {
  beforeEach(function () {
    fizzbuzz = new fizzBuzz();
  });

  describe("returns number, fizz, buzz or fizzBuzz", function () {
    it("should exist", function () {
      expect(fizzbuzz).toBeDefined();
    });
    it("should return Fizz when called as fizzBuzz(9)", function () {
      var result = fizzBuzz(9);
      expect(result).toBe("Fizz");
    });
    it("should return Buzz when called as fizzBuzz(10)", function () {
        var result = fizzBuzz(10);
      expect(result).toBe("Buzz");
    });
    it("should return FizzBuzz when called as fizzBuzz(15)", function () {
        var result = fizzBuzz(15);
      expect(result).toBe("FizzBuzz");
    });
    it("should return number when called as fizzBuzz(16)", function () {
        var result = fizzBuzz(16);
      expect(result).toBe(16);
    });
  });
});
