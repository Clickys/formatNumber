describe("Format Method", function() {
    it("should convert the number to currency", function() {
      expect(format([123])).toEqual(['$123']);
    });

    it("should convert two array elements typeof number to currency(string)", function() {
      expect(format([123, 456])).toEqual(['$123', '$456']);
    });

    it("should convert two array elements typeof number to currency(string) with the correct spaces.", function() {
      expect(format([123, 4567])).toEqual(['$ 123', '$4567']);
    });

    it("should remove any special character and convert number to currency", function() {
      expect(format(['!@#$%$#%1234'])).toEqual(['$1234']);
    });
  });