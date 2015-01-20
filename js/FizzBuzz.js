var FizzBuzz = function() {
  //this.color = "red";
}; //like object def

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return number %5 === 0;
};