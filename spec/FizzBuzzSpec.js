describe("",function() {
  
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("know when a number",function() {

    it("is divisible by 3",function() {
      //fizbuzz = FizzBuzz.new in ruby
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is NOT divisible by 3",function(){
      expect(fizzbuzz.isDivisibleByThree(2)).toBe(false);
    });

    it("is divisible by 5",function(){
      expect(fizzbuzz.isDivisibleByFive(10)).toBe(true);
    });

    it("is NOT divisible by 5",function(){
      expect(fizzbuzz.isDivisibleByFive(9)).toBe(false);
    });

    it("is divisible by 15",function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it("is NOT divisible by 15",function(){
      expect(fizzbuzz.isDivisibleByFifteen(10)).toBe(false);
    });

  });

});