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

  describe("when playing, says",function(){

    it('"Fizz" when a number is divisible by 3',function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5',function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15',function(){
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });

  });

  describe("",function(){
    it("should print a loop",function(){
      fizzbuzz.looop(3,"olo");
    });
  });

});