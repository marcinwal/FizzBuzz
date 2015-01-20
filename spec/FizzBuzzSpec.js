describe("",function() {
  
  var fizzbuzz

  describe("know when a number",function() {

    it("is divisible by 3",function() {
      fizzbuzz = new FizzBuzz();

      //fizbuzz = FizzBuzz.new in ruby
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is NOT divisible by 3",function(){
      fizzubuz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(2)).toBe(false);
    });

  });

});